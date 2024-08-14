    const User = require("../models/User");
    const jwt = require("jsonwebtoken");

    // @desc    Authenticate user & get token
    // @route   POST /api/auth/login
    // @access  Public
    exports.login = async (req, res) => {
      const { username, password } = req.body;

      try {
        const user = await User.findOne({ username });

        if (!user || !(await user.matchPassword(password))) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.json({ token });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    };
