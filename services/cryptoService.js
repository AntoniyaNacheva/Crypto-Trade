const Crypto = require('../models/Crypto');

exports.getAll = () => Crypto.find({}).lean();

exports.getOne = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.buy = async (userId, cryptoId) => {
	// Crypto.findByIdAndUpdate(cryptoId, { $push: { buyers: userId } });

	const crypto = await Crypto.findById(cryptoId);
	crypto.buyers.push(userId);

	return crypto.save();
}

exports.create = (ownerId, cryptoData) => Crypto.create({ ...cryptoData, owner: ownerId });