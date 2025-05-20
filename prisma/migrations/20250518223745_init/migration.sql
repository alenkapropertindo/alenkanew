-- CreateEnum
CREATE TYPE "AcountRole" AS ENUM ('WAITING', 'FREELANCE', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FOLLOWUP', 'ONPROCESS', 'SUCCESS', 'CANCEL');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsup" TEXT NOT NULL,
    "payout" INTEGER NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,
    "role" "AcountRole" NOT NULL DEFAULT 'WAITING',
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "freelanceId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "whatsup" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'FOLLOWUP',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produk" (
    "id" TEXT NOT NULL,
    "customerId" TEXT,
    "namaProduk" TEXT NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "fee" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_whatsup_key" ON "Account"("whatsup");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_whatsup_key" ON "Customer"("whatsup");

-- CreateIndex
CREATE INDEX "Customer_freelanceId_idx" ON "Customer"("freelanceId");

-- CreateIndex
CREATE UNIQUE INDEX "Produk_namaProduk_key" ON "Produk"("namaProduk");

-- CreateIndex
CREATE INDEX "Produk_customerId_idx" ON "Produk"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_token_key" ON "PasswordResetToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_email_token_key" ON "PasswordResetToken"("email", "token");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_freelanceId_fkey" FOREIGN KEY ("freelanceId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produk" ADD CONSTRAINT "Produk_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
