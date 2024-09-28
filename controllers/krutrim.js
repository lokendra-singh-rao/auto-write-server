import { krutrimService } from "../services/krutrim.js";

export const krutrimControllers = {
  generateEmailReply: async (req, res) => {
    try {
      const { emailContent } = req.body;

      const response = await krutrimService.generateEmailReply({ emailContent });

      if(response.ok) {
        return res.status(200).json({ data: response.data });
      }

      return res.status(500).json({ err: "Something went wrong! Please try again later" });
    } catch (error) {
      return res.status(500).json({ err: "Something went wrong! Please try again later" });
    }
  },
};
