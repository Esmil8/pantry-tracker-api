BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Pantry] DROP CONSTRAINT [Pantry_UserId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PantryItem] DROP CONSTRAINT [PantryItem_PantryId_fkey];

-- CreateIndex
CREATE NONCLUSTERED INDEX [Pantry_UserId_idx] ON [dbo].[Pantry]([UserId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [PantryItem_PantryId_idx] ON [dbo].[PantryItem]([PantryId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Product_CategoryId_idx] ON [dbo].[Product]([CategoryId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Product_UnitId_idx] ON [dbo].[Product]([UnitId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Product_Name_idx] ON [dbo].[Product]([Name]);

-- AddForeignKey
ALTER TABLE [dbo].[Pantry] ADD CONSTRAINT [Pantry_UserId_fkey] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PantryItem] ADD CONSTRAINT [PantryItem_PantryId_fkey] FOREIGN KEY ([PantryId]) REFERENCES [dbo].[Pantry]([Id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
