---
sidebar_position: 11
draft: true
---

# File Upload Guidelines

This guide will help you prepare your files properly so they upload smoothly and process without any issues. We'll walk you through everything you need to know about compression methods, browser choices, and best practices.

## What You'll Learn

By following these guidelines, you can:
- [ ] **Create compatible ZIP files** that upload and process successfully
- [ ] **Choose the right browser** for large file uploads
- [ ] **Avoid common upload issues** and errors
- [ ] **Optimise your file preparation** for faster processing
- [ ] **Troubleshoot upload problems** quickly and effectively

---

## ZIP File Compression Methods

### Understanding Compression Types

ZIP files can use different compression methods, and not all of them work with Vela. Our system uses the `decompress-unzip` package, so we need to stick to the most widely supported compression methods.

**✅ What Works Great:**
- **Deflate (Method 8)**: This is the standard ZIP compression - **Best choice**
- **Store (Method 0)**: Files stored without compression

**❌ What Causes Problems:**
- **Deflate64 (Method 9)**: This proprietary method will give you "Unsupported compression method 9" errors
- **LZMA (Method 14)**: Another method that causes "Unsupported compression method 14" errors  
- **BZip2 (Method 12)**: Alternative compression that we don't support

### Why Some Methods Don't Work

Deflate64 is a proprietary compression method that's not widely supported. If you 
use it, you'll get the error "Unsupported compression method 9" when trying to 
decompress your files.

---

## Creating Compatible ZIP Files

### Using 7-Zip (Our Recommendation)

7-Zip gives you complete control over compression settings. Here's how to use it properly:

**Step-by-step process:**
1. **Right-click** your files or folder
2. **Select "7-Zip"** → "Add to archive..."
3. **Archive format**: Choose "ZIP" 
4. **Compression level**: Any level works (1-9)
5. **Compression method**: Select "Deflate" (NOT "Deflate64")
6. **Click "OK"** to create your ZIP file

**Recommended 7-Zip Settings:**
```
Archive format: ZIP
Compression level: 5 (recommended)
Compression method: Deflate
```

### Using Windows Built-in ZIP

Windows Explorer's built-in ZIP creation uses Deflate by default, so it's already compatible:

1. **Select** your files or folder
2. **Right-click** → "Send to" → "Compressed (zipped) folder"
3. **Rename** the ZIP file if you want

No complicated settings required.

### Using WinRAR

For WinRAR users:

1. **Select** your files
2. **Right-click** → "Add to archive..."
3. **Archive format**: Choose "ZIP" (not RAR)
4. **Compression method**: Select "ZIP compression method" 
5. **Compression level**: Any level works fine

---

## Browser Limitations for Large Files

### File Size Limits

Vela supports uploads up to **3 GB**, but different browsers handle large uploads differently:

| Browser | Large File Handling | Notes |
|---------|---------------------|-------|
| **Firefox** | Generally reliable | ✅ **Recommended for large uploads** |
| **Chrome** | May struggle | ⚠️ Can run out of memory with large files |
| **Edge** | May struggle | ⚠️ Similar memory constraints to Chrome |
| **Safari** | Varies | ⚠️ Performance depends on system memory and version |

### Why Firefox Works Better

Firefox tends to handle large file uploads more reliably than Chrome or Edge. Actual limits depend on your system's available memory.


---

## Best Practices for File Preparation

### 1. ZIP File Creation
- [ ] **Use Deflate compression** - Recommended
- [ ] **Test your ZIP file** before uploading
- [ ] **Keep file names simple** - avoid special characters that might cause issues
- [ ] **Organise files logically** in folders

### 2. File Size Management
- [ ] **Use Firefox** for files over 1 GB
- [ ] **Split large datasets** into smaller ZIP files if needed
- [ ] **Check file sizes** before uploading
- [ ] **Monitor upload progress** closely

### 3. File Organisation
- [ ] **Use descriptive folder names** (e.g., "Call_Recordings_2024-01")
- [ ] **Group related files** together
- [ ] **Avoid deeply nested folders**
- [ ] **Include a README file** if needed for context

### 4. Quality Checks
- [ ] **Check file formats** are supported (WAV, MP3, etc.)
- [ ] **Test ZIP extraction** on another computer
- [ ] **Make sure files aren't corrupted**

---

## Troubleshooting Upload Issues

Most upload issues have simple solutions. Here are the most common problems and how to fix them.

### ZIP File Problems

**Problem**: ZIP file uploads but fails to process

**Here's how to fix it:**
- [ ] **Recreate the ZIP** using Deflate compression
- [ ] **Check file names** for special characters
- [ ] **Try a smaller ZIP file** first
- [ ] **Use 7-Zip** with the correct settings

**Problem**: "Unsupported compression method" error

**These error messages tell you exactly what's wrong:**
- "Unsupported compression method 9" = You used Deflate64 compression
- "Unsupported compression method 14" = You used LZMA compression  
- "Unsupported compression method 12" = You used BZip2 compression

**Solution**: 
- [ ] **Use Deflate compression** (not Deflate64, LZMA, or BZip2)
- [ ] **Recreate the ZIP file** with the correct settings
- [ ] **Check your compression tool** settings
- [ ] **Verify compression method** is set to "Deflate" or "Store"

### Browser-Related Issues

**Problem**: Upload fails or browser crashes with large files

**Solution**:
- [ ] **Switch to Firefox** for large uploads
- [ ] **Try smaller file sizes** first
- [ ] **Clear browser cache** and try again
- [ ] **Close other browser tabs** to free up memory

**Problem**: Upload progress freezes

**Solution**:
- [ ] **Wait a bit longer** - large files take time
- [ ] **Use Firefox** instead of Chrome/Edge


---

## Alternative Upload Methods

### For Very Large Files

If you're still having trouble with browser uploads, there are other options available:

**FTP Integration:**
- Contact your Vela Account Manager to set up automated FTP ingestion
- Calls are pulled from your FTP server on a schedule — no manual uploads needed

**Batch Processing:**
- Split large datasets into smaller ZIP files
- Upload in multiple batches
- Process files incrementally

---

## Next Steps

| For File Upload | For Technical Support |
|----------------|----------------------|
| [Data Upload Guide](./data-upload.md) | [Contact Support](mailto:support@botlhale.ai) |

### See also
- [Quick Start Guide](./quick-start.md) - Get started with Vela
- [Data Upload Guide](./data-upload.md) - Upload your call recordings
- [Dashboard Setup](./Dashboard.md) - Create your performance dashboard

## Need Help?

Still having trouble? Contact our support team for assistance.

- **Email Support**: support@botlhale.ai
- **Response Time**: Within 24 hours (usually much faster!)
- **Available**: Monday - Friday, 9 AM - 5 PM SAST

