-- AlterTable
ALTER TABLE `Fornecedor` ADD COLUMN `id_fazenda` INTEGER NULL;

-- AlterTable
ALTER TABLE `Funcionario` ADD COLUMN `id_fazenda` INTEGER NULL;

-- AlterTable
ALTER TABLE `Produto` ADD COLUMN `id_fazenda` INTEGER NULL;

-- CreateTable
CREATE TABLE `Fazenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
