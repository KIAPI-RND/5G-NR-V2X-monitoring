const bcrypt = require("bcryptjs");
const {
  verifyToken,
  findRoleById,
} = require("../middlewares/authJwt.middleware");
const dbAdapter = require("../db/dbAdapter");

module.exports = function (app) {
    app.post(
        "/api/get_drivers",
        [verifyToken, findRoleById, isUser],
        async (req, res) => {
            try {
                res.status(200).send({
                    drivers: db.drivers,
                });
            } catch (err) {
                console.log(err);
                res.status(500).send({ message: "server error" });
            }
        }
    );
}