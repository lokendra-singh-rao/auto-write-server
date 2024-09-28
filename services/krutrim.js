import axios from "axios";
import { replyLengthTypes } from "../config/constants.js";

export const krutrimService = {
  generateEmailReply: async ({ emailContent }) => {
    const replies = {};

    for (const lengthType of replyLengthTypes) {
      const url = "https://cloud.olakrutrim.com/v1/chat/completions";
      const data = {
        model: "Krutrim-spectre-v2",
        messages: [
          {
            role: "system",
            content: `Write a ${lengthType} length reply for the email given by user. The reply should be accurate and professional.`,
          },
          {
            role: "user",
            content: emailContent,
          },
        ],
        frequency_penalty: 0,
        logprobs: true,
        top_logprobs: 2,
        max_tokens: 256,
        n: 1,
        presence_penalty: 0,
        response_format: { type: "text" },
        stream: false,
        temperature: 0,
        top_p: 1,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.KRUTRIM_SECRET_KEY}`,
        },
      });
      const key = lengthType.split(" ")[0];
      replies[key] = response.data.choices[0].message.content;
    }
    return { ok: true, data: replies };
  },
};
