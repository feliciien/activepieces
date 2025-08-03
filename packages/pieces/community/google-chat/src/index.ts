
import { z } from "zod";
import { createPiece, PieceAuth, PropertyType } from "@activepieces/pieces-framework";
import { logAuthToken } from "./lib/actions/log-auth-token";

    export const googleChat = createPiece({
      displayName: "Google-chat",
      auth: PieceAuth.OAuth2({
        required: true,
        props: {
          client_id: {
            displayName: "Client ID",
            required: true,
            description: "Google Cloud OAuth2 Client ID",
            type: PropertyType.SHORT_TEXT,
            valueSchema: "string"
          },
          client_secret: {
            displayName: "Client Secret",
            required: true,
            description: "Google Cloud OAuth2 Client Secret",
            type: PropertyType.SECRET_TEXT,
            valueSchema: "string"
          }
        },
        authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenUrl: "https://oauth2.googleapis.com/token",
        scope: ["https://www.googleapis.com/auth/chat.bot"]
      }),
      minimumSupportedRelease: '0.36.1',
      logoUrl: "https://cdn.activepieces.com/pieces/google-chat.png",
      authors: [],
      actions: [logAuthToken],
      triggers: [],
    });
    