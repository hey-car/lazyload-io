This implementation is a proof of concept for Intersection Observer i.e. lazy loading the images through IO. It shows, how we can make sure that the SEO crawlers do not fail to see the images.

To verify how google crawls the page with the lazy loaded images, we can follow the below steps :- 

```bash
# Goto the root directory.
# Run the below command
node check_lazyload_seo.js --url=http://localhost:3006
#Open results.html from the root directory and verify the crawler result.
```



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3006](http://localhost:3006) with your browser to see the result.

