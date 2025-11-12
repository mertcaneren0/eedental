import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"
import { z } from "zod"

const updateSchema = z.object({
  name: z.string().min(2).optional(),
  title: z.string().min(2).optional(),
  specialty: z.string().optional(),
  bio: z.string().min(10).optional(),
  imageUrl: z.string().optional(),
  order: z.number().optional(),
  isActive: z.boolean().optional(),
})

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const body = await request.json()
    const validatedData = updateSchema.parse(body)
    
    const member = await prisma.teamMember.update({
      where: { id: params.id },
      data: validatedData,
    })
    
    return NextResponse.json({
      success: true,
      data: member,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, error: "Unauthorized or not found" },
      { status: 401 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    await prisma.teamMember.delete({
      where: { id: params.id },
    })
    
    return NextResponse.json({
      success: true,
      message: "Team member deleted successfully",
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unauthorized or not found" },
      { status: 401 }
    )
  }
}
