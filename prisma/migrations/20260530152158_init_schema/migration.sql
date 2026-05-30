BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(100) NOT NULL,
    [LastName] NVARCHAR(100) NOT NULL,
    [Email] NVARCHAR(100) NOT NULL,
    [PasswordHash] NVARCHAR(255) NOT NULL,
    [CreatedDate] DATETIME NOT NULL CONSTRAINT [User_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedDate] DATETIME NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([Id]),
    CONSTRAINT [User_Email_key] UNIQUE NONCLUSTERED ([Email])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(100) NOT NULL,
    [Description] NVARCHAR(255) NOT NULL,
    [CreatedDate] DATETIME NOT NULL CONSTRAINT [Category_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedDate] DATETIME NOT NULL,
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Unit] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(100) NOT NULL,
    [Abbreviation] NVARCHAR(10) NOT NULL,
    [CreatedDate] DATETIME NOT NULL CONSTRAINT [Unit_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedDate] DATETIME NOT NULL,
    CONSTRAINT [Unit_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Pantry] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(100) NOT NULL,
    [UserId] INT NOT NULL,
    [CreatedDate] DATETIME NOT NULL CONSTRAINT [Pantry_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedDate] DATETIME NOT NULL,
    CONSTRAINT [Pantry_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[PantryItem] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [PantryId] INT NOT NULL,
    [ProductId] INT NOT NULL,
    [ExpirationDate] DATE,
    [Location] NVARCHAR(255),
    [Quantity] DECIMAL(10,5) NOT NULL,
    [Notes] NVARCHAR(500),
    [CreatedDate] DATETIME NOT NULL CONSTRAINT [PantryItem_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedDate] DATETIME NOT NULL,
    CONSTRAINT [PantryItem_pkey] PRIMARY KEY CLUSTERED ([Id]),
    CONSTRAINT [PantryItem_PantryId_ProductId_ExpirationDate_Location_key] UNIQUE NONCLUSTERED ([PantryId],[ProductId],[ExpirationDate],[Location])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [CategoryId] INT NOT NULL,
    [UnitId] INT NOT NULL,
    [Name] NVARCHAR(100) NOT NULL,
    [Description] NVARCHAR(255) NOT NULL,
    [Brand] NVARCHAR(100) NOT NULL,
    [BarCode] NVARCHAR(50) NOT NULL,
    [CreatedDate] DATETIME NOT NULL CONSTRAINT [Product_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedDate] DATETIME NOT NULL,
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([Id]),
    CONSTRAINT [Product_BarCode_key] UNIQUE NONCLUSTERED ([BarCode])
);

-- AddForeignKey
ALTER TABLE [dbo].[Pantry] ADD CONSTRAINT [Pantry_UserId_fkey] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PantryItem] ADD CONSTRAINT [PantryItem_PantryId_fkey] FOREIGN KEY ([PantryId]) REFERENCES [dbo].[Pantry]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PantryItem] ADD CONSTRAINT [PantryItem_ProductId_fkey] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_CategoryId_fkey] FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[Category]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_UnitId_fkey] FOREIGN KEY ([UnitId]) REFERENCES [dbo].[Unit]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
