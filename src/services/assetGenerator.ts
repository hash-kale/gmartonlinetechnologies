import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAvatar(role: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `Minimal 2D unique avatar of a ${role}, simple line art with flat color fills, tech-focused style, matching a professional tech hub aesthetic. Colors: deep blue (#1e3a8a), accent blue (#3b82f6), and cyan (#06b6d4). White background.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
  } catch (error) {
    console.error("Failed to generate avatar:", error);
    // Fallback to DiceBear
    const seed = encodeURIComponent(role);
    return `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  }
  return null;
}

export async function generateScribbles() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: "Set of simple minimal hand-drawn 2D arrows and scribbles, unique shapes, matching a tech website aesthetic. Colors: deep blue (#1e3a8a), accent blue (#3b82f6), and cyan (#06b6d4). White background.",
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
  } catch (error) {
    console.error("Failed to generate scribbles:", error);
  }
  return null;
}
