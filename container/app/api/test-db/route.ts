// app/api/test-db/route.ts

import { NextResponse } from "next/server";
import { sequelize } from "../../../db/models/index"; // Adjust path to your models/index.ts

export async function GET() {
  try {
    await sequelize.authenticate(); // Test DB connection
    await sequelize.sync({ alter: true }); // Create/sync tables

    return NextResponse.json({ message: "Database synced successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to sync DB" }, { status: 500 });
  }
}
