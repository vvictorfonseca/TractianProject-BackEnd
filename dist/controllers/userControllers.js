var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import userService from "../services/userService.js";
import companyService from "../services/companyService.js";
function createNewUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, user, userAdm;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = req.body;
                    user = res.locals.user;
                    return [4 /*yield*/, userService.getUserByEmail(user.email)];
                case 1:
                    userAdm = _a.sent();
                    console.log(userAdm.isAdm);
                    if (!userAdm.isAdm) {
                        throw { type: "not_allowed", message: "This user can't create new users" };
                    }
                    return [4 /*yield*/, userService.createNewUser(newUser)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(201)];
            }
        });
    });
}
function loginAdm(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newLogin, userAdm, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("entrou");
                    newLogin = req.body;
                    return [4 /*yield*/, userService.getUserByEmail(newLogin.email)];
                case 1:
                    userAdm = _a.sent();
                    console.log(newLogin);
                    if (!userAdm.isAdm) {
                        throw { type: "not_allowed", message: "You can't login as Adm" };
                    }
                    return [4 /*yield*/, userService.loginUser(newLogin)];
                case 2:
                    token = _a.sent();
                    return [2 /*return*/, res.status(200).send(__assign(__assign({}, userAdm), { token: token }))];
            }
        });
    });
}
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newLogin, companyId, user, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newLogin = req.body;
                    companyId = req.params.companyId;
                    return [4 /*yield*/, userService.getUserByEmail(newLogin.email)];
                case 1:
                    user = _a.sent();
                    if (user.companyId !== companyId) {
                        throw { type: "not_allowed", message: "You can't login in this company" };
                    }
                    return [4 /*yield*/, userService.loginUser(newLogin)];
                case 2:
                    token = _a.sent();
                    return [2 /*return*/, res.status(200).send(__assign(__assign({}, user), { token: token }))];
            }
        });
    });
}
function getUserByName(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, userName, userStatus, companyId, company;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.params.name;
                    return [4 /*yield*/, userService.getUserByName(name)];
                case 1:
                    userName = _a.sent();
                    userStatus = userName.isAdm;
                    companyId = userName.companyId;
                    return [4 /*yield*/, companyService.getCompanyById(companyId)];
                case 2:
                    company = _a.sent();
                    return [2 /*return*/, res.status(200).send({
                            status: userStatus,
                            companyId: companyId,
                            name: company.name
                        })];
            }
        });
    });
}
export { createNewUser, loginAdm, loginUser, getUserByName };
