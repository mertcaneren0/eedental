import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Cleaning up invalid team member image URLs...')
  
  // Find all team members with invalid imageUrl
  const members = await prisma.teamMember.findMany()
  
  let updatedCount = 0
  
  for (const member of members) {
    if (member.imageUrl && 
        !member.imageUrl.startsWith('/') && 
        !member.imageUrl.startsWith('http')) {
      console.log(`Fixing invalid URL for ${member.name}: "${member.imageUrl}"`)
      
      await prisma.teamMember.update({
        where: { id: member.id },
        data: { imageUrl: null },
      })
      
      updatedCount++
    }
  }
  
  console.log(`\nCleaned up ${updatedCount} invalid image URLs`)
  console.log('Done!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
