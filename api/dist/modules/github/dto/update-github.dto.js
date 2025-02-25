"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGithubDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_github_dto_1 = require("./create-github.dto");
class UpdateGithubDto extends (0, mapped_types_1.PartialType)(create_github_dto_1.CreateGithubDto) {
}
exports.UpdateGithubDto = UpdateGithubDto;
//# sourceMappingURL=update-github.dto.js.map