import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"
import { z } from "zod"

const updateSchema = z.object({
  status: z.enum(["new", "reviewing", "interviewed", "accepted", "rejected"]).optional(),
  notes: z.string().optional(),
})

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const body = await request.json()
    const validatedData = updateSchema.parse(body)
    
    const application = await prisma.careerApplication.update({
      where: { id: params.id },
      data: validatedData,
    })
    
    return NextResponse.json({
      success: true,
      data: application,
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
    
    await prisma.careerApplication.delete({
      where: { id: params.id },
    })
    
    return NextResponse.json({
      success: true,
      message: "Application deleted successfully",
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unauthorized or not found" },
      { status: 401 }
    )
  }
}
