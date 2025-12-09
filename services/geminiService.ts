import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure API key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

/**
 * Sends a message to the Gemini model to get game add-on recommendations.
 * Uses gemini-2.5-flash for speed and efficiency.
 */
export const getGamingAssistantResponse = async (
  userMessage: string,
  context?: string
): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, but the AI Assistant is currently offline (API Key missing). Please explore our categories manually!";
  }

  try {
    const systemInstruction = `You are NexusBot, an expert gaming assistant for NexusForge. 
    Your goal is to help gamers find the best mods, server hosting, VPNs, and gaming tools.
    
    Style Guide:
    - Tone: Helpful, knowledgeable, "gamer-friendly" but professional.
    - Be concise. Gamers want quick answers.
    - If suggesting products, mention they might be available in our catalog.
    - Do not hallucinate URLs. 
    - Focus on PC gaming and popular console mods.

    Context: The user is currently browsing a website dedicated to game add-ons reviews and affiliate deals.
    ${context ? `User Current Context: ${context}` : ''}
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300, 
      },
    });

    return response.text || "I couldn't generate a response. Try asking about specific games or tools!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please try again later.";
  }
};
