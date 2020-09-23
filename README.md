This implementation is a proof of concept for Intersection Observer i.e. lazy loading the images through IO. It shows, how we can make sure that the SEO crawlers do not fail to see the images.

To verify how google crawls the page with the lazy loaded images, we can follow the below steps :- 
Goto the root directoty.
Run the below command 
node check_lazyload_seo.js --url=http://localhost:3006
Open results.html from the root directory and verify the crawler result.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3006](http://localhost:3006) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
