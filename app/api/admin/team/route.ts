import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"
import { z } from "zod"

const teamMemberSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  title: z.string().min(2, "Ünvan giriniz"),
  specialty: z.string().optional(),
  bio: z.string().min(10, "Biyografi en az 10 karakter olmalıdır"),
  imageUrl: z.string().optional(),
  order: z.number().optional(),
  isActive: z.boolean().optional(),
})

export async function GET(request: NextRequest) {
  try {
    await requireAuth()
    
    const { searchParams } = new URL(request.url)
    const includeInactive = searchParams.get("includeInactive") === "true"
    
    const where = includeInactive ? {} : { isActive: true }
    
    const members = await prisma.teamMember.findMany({
      where,
      orderBy: { order: "asc" },
    })
    
    return NextResponse.json({
      success: true,
      data: members,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth()
    
    const body = await request.json()
    const validatedData = teamMemberSchema.parse(body)
    
    const member = await prisma.teamMember.create({
      data: validatedData,
    })
    
    return NextResponse.json(
      { 
        success: true, 
        data: member,
        message: "Ekip üyesi başarıyla eklendi" 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, error: "Unauthorized or invalid data" },
      { status: 401 }
    )
  }
}
