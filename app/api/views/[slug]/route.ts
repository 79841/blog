import prisma from 'prisma/client'

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug
  try {
    const post = await prisma.views.create({
      data: {
        title: slug,
      },
    })
    return Response.json(post)
  } catch (e) {
    return new Response('Failed to create data', { status: 500 })
  }
}

export async function GET(request: Request, { params: { slug } }: { params: { slug: string } }) {
  const views = await prisma.views.findUnique({
    where: {
      title: slug,
    },
  })

  return Response.json(views)
}

export async function PATCH(request: Request, { params: { slug } }: { params: { slug: string } }) {
  const views = await prisma.views.findUnique({
    where: {
      title: slug,
    },
  })

  if (views === null) {
    return new Response('Data not exist', { status: 404 })
  }

  const updateViews = await prisma.views.update({
    where: {
      title: slug,
    },
    data: {
      views: views?.views + 1,
    },
  })

  return Response.json(updateViews)
}
