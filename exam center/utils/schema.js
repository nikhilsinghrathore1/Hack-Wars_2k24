// import { serial, text, varchar } from "drizzle-orm/mysql-core";
import { pgTable, PgVarcharBuilder, serial, text, varchar } from "drizzle-orm/pg-core";

// Define the table schema at the top level of the module
export const MockInterview =  pgTable("mockInterview", {
    id: serial("id").primaryKey(),
    jsonMockrResp: text("jsonMockrResp").notNull(),
    jobPosition: varchar("jobPosition", 255).notNull(),
    jobDesc: varchar("jobDesc", 255).notNull(),
    jobExp: varchar("jobExp", 255).notNull(),
    createdBy: varchar("createdBy", 255).notNull(),
    createdAt: varchar("createdAt", 255).notNull(),
    mockId: varchar("mockId", 255).notNull()
});

export const UserAnswer = pgTable("userAnswer",{
               id:serial("id").primaryKey(),
               mockIdRef:varchar("mockId").notNull(),
               question: varchar("question").notNull(),
               correctAns:text("correctAns"),
               userAns:text("userAns"),
               feedback:text("feedback"),
               rating:varchar("rating"),
               userEmail:varchar("userEmail"),
               createdAt:varchar("createdAt")
})
