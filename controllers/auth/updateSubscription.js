const { User } = require('../../models/user');

const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    const { subscription } = req.body;
    const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true });
    res.json({
        subscription: result.subscription,
    });
};

module.exports = updateSubscription;
