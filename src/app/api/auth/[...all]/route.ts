import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/shared/server";

export const { GET, POST } = toNextJsHandler(auth);
