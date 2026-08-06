---
sidebar_position: 11
title: Preparing ZIP Files for Bulk Upload
type: how-to
---

# Preparing ZIP Files for Bulk Upload

Bulk upload accepts a ZIP archive of call recordings plus a `metadata.csv`. Vela can only read ZIP files created with the two most common compression methods, so an archive made with a less common method fails to process. This page shows how to create a compatible ZIP and how to fix a compression error.

---

## Supported Compression

Create your ZIP with one of these methods:

- **Deflate** (method 8): the standard ZIP compression. Use this.
- **Store** (method 0): no compression.

These methods are not supported and cause the upload to fail: **Deflate64** (method 9), **BZip2** (method 12), and **LZMA** (method 14).

---

## Creating a Compatible ZIP

### Windows (Built-In)

Windows Explorer uses Deflate by default, so its archives are already compatible. Select your files, right-click, and choose **Send to → Compressed (zipped) folder**.

### 7-Zip

1. Select your files, right-click, and choose **7-Zip → Add to archive**.
2. Set **Archive format** to **zip**.
3. Set **Compression method** to **Deflate** (not Deflate64).
4. Click **OK**.

### WinRAR

1. Select your files, right-click, and choose **Add to archive**.
2. Set the archive format to **ZIP** (not RAR).
3. Any compression level works.

---

## Fixing a Compression Error

If a bulk upload fails to process with an **Unknown compression method** error, the archive used a method Vela cannot read. The number in the message identifies it:

| Error | Method used | Fix |
| :--- | :--- | :--- |
| `Unknown compression method: 9` | Deflate64 | Recreate the ZIP with Deflate |
| `Unknown compression method: 12` | BZip2 | Recreate the ZIP with Deflate |
| `Unknown compression method: 14` | LZMA | Recreate the ZIP with Deflate |

Recreate the archive using Deflate or Store, then upload again.

---

## Related

- [Upload Your Data](./data-upload.md): the full bulk upload process and the `metadata.csv` format.
- [Troubleshooting Guide](./support/troubleshooting-guide.md): other upload and processing issues.
