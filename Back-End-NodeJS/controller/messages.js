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
    const messages = await Message.find({ response: false }).sort({ createdAt: -1 });
    res.status(200).json({ data: messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.postReply = async (req, res) => {
  const { messageId } = req.params;
  const { reply } = req.body;

  try {
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    message.response = true;
    message.reply = reply;
    await message.save();

    res.json({ message: 'Reply posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getresolved = async (req, res) => {
  const { name }  = req.body
  try {
    const messages = await Message.find({ owner: name }).sort({ createdAt: -1 });
    res.status(200).json({ data: messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
