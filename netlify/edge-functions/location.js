export default async (request, context) => {
    // context: {
    //   geo: {
    //     city?: string;
    //     country?: {
    //       code?: string;
    //       name?: string;
    //     },
    //     subdivision?: {
    //       code?: string;
    //       name?: string;
    //     },
    //   }
    // }

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //       context
    //     })
    //   }
    return context.json({
        geo: context.geo,
        header: request.headers.get("x-nf-geo"),
      })
};