import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  "/generate-program",
  "/profile",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
   matcher: "/((?!.*\\..*|_next).*)", // sab routes ke liye chalega
};