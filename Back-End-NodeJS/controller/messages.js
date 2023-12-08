const Message = require('../model/messages');

// Controller to send a message
exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId } = req;

    const newMessage = new Message({
      owner: userId,
      message,
    });

    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get all messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({ data: messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
