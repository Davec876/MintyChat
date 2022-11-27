const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreaChat = require('stream-chat');
const crypto = require('crypto');

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async(req, res) => {

    try{
        const {fullName, username, password, phoneNumber} = req.body;

        const userId = crypto.randomBytes(16).toString("hex");

        //connecting to stream chat
        const serverClient = connect(api_key, api_secret, app_id);

        //encrypt password using bcrypt for user security
        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({token, fullName, username, userId, hashedPassword, phoneNumber});

    }catch(err){
        console.log(err);
        res.status(500).json({message: error });
    }

};

const login = async (req, res) => {

    try{
        
        const { username, password } = req.body;

        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        //check if username exists
        const { users } = await client.queryUsers({ name: username });

        //if user does not exist return error
        if(!users.length) return res.status(400).json({message: 'User not found'});

        //if user exists, check if password is correct
        const success = await bcrypt.compare(password, users[0].hashedPassword);

        // create token for user
        const token = serverClient.createUserToken(users[0].id);

        //if password is incorrect return error
        if(success){
            res.status(200).json({token, fullName: users[0].fullName, username, userId: users[0].id});
        }else{
            res.status(500).json({message: 'Incorrect password'});
        }


    }catch(err){
        console.log(err);
        res.status(500).json({message: error });
    }

};



//exporting the functions
modules.exports = { signup, login };