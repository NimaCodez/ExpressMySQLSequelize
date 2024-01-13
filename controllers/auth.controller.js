const createHttpError = require('http-errors');
const { User } = require('../models/User.model');
const bcrypt = require('bcrypt');

const hashPassword = async password =>
    await bcrypt.hash(password, 11);

const checkPassword = async (password, hash) =>
    !!(await bcrypt.compare(password, hash));

const checkUsernameExistence = async username =>
    !!(await User.findOne({ where: { username } }));

const signUp = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (await checkUsernameExistence(username))
            throw createHttpError.BadRequest('This username is already taken');
        const user = await User.create({
            username,
            password: await hashPassword(password),
        });
        if (user) {
            return res.status(201).json({
                status: 201,
                success: true,
                message: 'User created successfully',
                data: null,
            });
        } else {
            return res.status(500).json({
                status: 500,
                success: false,
                message: 'Error creating user',
                data: null,
            });
        }
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { username },
            benchmark: true,
        });

        if (!user) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: 'User not found',
                data: null,
            });
        }

        const validPassword = await checkPassword(password, user.password);

        if (!validPassword) {
            return res.status(401).json({
                status: 401,
                success: false,
                message: 'Invalid username or password',
                data: null,
            });
        }

        // Generate access token
        const accessToken = generateAccessToken(user.id);

        // Generate refresh token
        const refreshToken = generateRefreshToken(user.id);

        return res.status(200).json({
            status: 200,
            success: true,
            message: 'User logged in successfully',
            data: { user: user.username }, // Return username or other user info, but don't return the password
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    signUp,
    login,
};
