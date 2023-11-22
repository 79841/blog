import { NextResponse } from 'next/server'
import prisma from 'prisma/client'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const {
    _sum: { views },
  } = await prisma.views.aggregate({
    _sum: {
      views: true,
    },
  })
  return NextResponse.json({ views })
}
