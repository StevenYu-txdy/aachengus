import {
  bigint,
  boolean,
  integer,
  json,
  pgTable,
  primaryKey,
  text,
  timestamp
} from "drizzle-orm/pg-core"
import type { AdapterAccount } from "next-auth/adapters"

const timestamps = {
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp()
}

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified"),
  image: text("image"),
  ...timestamps
})

export const accounts = pgTable(
  "accounts",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
    ...timestamps
  },
  (account) => ({
    compoundKey: account.provider,
    providerAccountId: account.providerAccountId
  })
)

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
  ...timestamps
})

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires").notNull(),
    ...timestamps
  },
  (vt) => ({
    compoundKey: vt.identifier,
    token: vt.token
  })
)

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credential_id").notNull().unique(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("provider_account_id").notNull(),
    credentialPublicKey: text("credential_public_key").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credential_device_type").notNull(),
    credentialBackedUp: boolean("credential_backed_up").notNull(),
    transports: text("transports"),
    ...timestamps
  },
  (authenticator) => [
    primaryKey({
      columns: [authenticator.userId, authenticator.credentialID]
    })
  ]
)
