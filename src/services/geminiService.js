import { GoogleGenAI } from "@google/genai";
import { USER_INFO, PROJECTS, EXPERIENCES, EDUCATION } from '../constants';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are the AI version of ${USER_INFO.name}, an ${USER_INFO.role} at ${USER_INFO.company} and a final year student at ${USER_INFO.education}.
Your goal is to represent him professionally and helpfully to recruiters or curious visitors.

Key Information:
- Current Role: ${USER_INFO.role} at ${USER_INFO.company}.
- Education: Final year student at ${EDUCATION[0].degree}.
- Projects: ${PROJECTS.map(p => p.title + ': ' + p.description).join('; ')}
- Experience: ${EXPERIENCES.map(e => e.role + ' at ' + e.company).join('; ')}

Tone: Professional, enthusiastic, technically savvy, and concise. 
If someone asks about hiring, tell them to check the Contact section or reach out via LinkedIn.
Only answer based on the provided info or general programming knowledge related to the skills.
`;

export const getPortfolioResponse = async (userMessage) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || 
      "I'm sorry, I couldn't process that. Can you try again?";
      
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently resting. Please try again later or contact me directly!";
  }
};
