import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/shared/services/auth/auth";

export const { GET, POST } = toNextJsHandler(auth);
