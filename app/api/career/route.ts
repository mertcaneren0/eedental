import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const careerSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  position: z.string().min(2, "Pozisyon seçiniz"),
  experience: z.string().optional(),
  education: z.string().optional(),
  message: z.string().optional(),
  cvUrl: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = careerSchema.parse(body)
    
    // Save to database
    const application = await prisma.careerApplication.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        position: validatedData.position,
        experience: validatedData.experience || null,
        education: validatedData.education || null,
        message: validatedData.message || null,
        cvUrl: validatedData.cvUrl || null,
      },
    })
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Başvurunuz başarıyla alındı!",
        id: application.id 
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
    
    console.error("Career application error:", error)
    return NextResponse.json(
      { success: false, error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    )
  }
}
