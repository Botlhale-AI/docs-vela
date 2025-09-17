---
sidebar_position: 11
---

# File Upload Guidelines

Learn how to prepare your files for optimal upload to Vela. This guide covers supported compression methods, browser limitations, and best practices to ensure your data uploads successfully.

## What You'll Learn

By following these guidelines, you can:
- [ ] **Create compatible ZIP files** that upload and process successfully
- [ ] **Choose the right browser** for large file uploads
- [ ] **Avoid common upload issues** and errors
- [ ] **Optimise your file preparation** for faster processing
- [ ] **Troubleshoot upload problems** quickly and effectively

---

## ZIP File Compression Methods

### Supported Compression Algorithms

Vela uses the `decompress-unzip` package to handle ZIP file uploads. This package supports standard ZIP compression methods but has limitations with certain proprietary formats.

**✅ Supported Methods:**
- **Deflate (Method 8)**: Standard ZIP compression - **RECOMMENDED**
- **No Compression (Method 0)**: Uncompressed files
- **Store (Method 0)**: Files stored without compression

**❌ Not Supported:**
- **Deflate64 (Enhanced Deflate)**: Proprietary compression method
- **BZip2**: Alternative compression algorithm
- **LZMA**: 7-Zip compression method

### Why Deflate64 Causes Issues

Deflate64 is a proprietary extension of the standard Deflate algorithm. While it offers slightly better compression ratios, it's not widely supported by libraries like the one Vela uses. This can cause upload failures and processing errors.

---

## Creating Compatible ZIP Files

### Using 7-Zip (Recommended)

7-Zip is a popular compression tool that gives you control over compression methods:

**Step-by-Step Process:**
1. **Right-click** your files/folder
2. **Select "7-Zip"** → "Add to archive..."
3. **Archive format**: Choose "ZIP"
4. **Compression level**: Any level (1-9)
5. **Compression method**: **IMPORTANT** - Select "Deflate" (not "Deflate64")
6. **Click "OK"** to create your ZIP file

**7-Zip Settings:**
```
Archive format: ZIP
Compression level: 5 (recommended)
Compression method: Deflate
```

### Using Windows Built-in ZIP

Windows Explorer's built-in ZIP creation uses Deflate by default, making it compatible:

1. **Select** your files/folder
2. **Right-click** → "Send to" → "Compressed (zipped) folder"
3. **Rename** the ZIP file as needed

### Using WinRAR

If using WinRAR:
1. **Select** your files
2. **Right-click** → "Add to archive..."
3. **Archive format**: Choose "ZIP"
4. **Compression method**: Select "ZIP" (not "RAR")
5. **Compression level**: Any level

---

## Browser Limitations for Large Files

### File Size Limits

Vela supports uploads up to **3 GB**, but browser limitations can affect your ability to upload large files:

| Browser | Recommended Max Size | Notes |
|---------|---------------------|-------|
| **Firefox** | Up to 3 GB | ✅ **Best for large uploads** |
| **Chrome** | Up to 1-2 GB | ⚠️ May run out of memory |
| **Edge** | Up to 1-2 GB | ⚠️ May run out of memory |
| **Safari** | Up to 2-3 GB | ⚠️ Varies by version |

### Why Firefox Works Better

Firefox handles large file uploads more efficiently than Chromium-based browsers (Chrome, Edge) because:
- **Higher memory limits** for file processing
- **Better memory management** during uploads
- **More stable** with large file operations

### Browser-Specific Issues

**Chrome/Edge Problems:**
- Browser may run out of memory during upload
- Upload progress may freeze or fail
- Files may appear to upload but fail processing

**Firefox Advantages:**
- More reliable with large files
- Better progress tracking
- Fewer memory-related failures

---

## Best Practices for File Preparation

### 1. ZIP File Creation
- [ ] **Use Deflate compression** - avoid Deflate64
- [ ] **Test your ZIP file** before uploading
- [ ] **Keep file names simple** - avoid special characters
- [ ] **Organise files logically** in folders

### 2. File Size Management
- [ ] **Use Firefox** for files over 1 GB
- [ ] **Split large datasets** into smaller ZIP files if needed
- [ ] **Check file sizes** before uploading
- [ ] **Monitor upload progress** closely

### 3. File Organisation
- [ ] **Use descriptive folder names** (e.g., "Call_Recordings_2024-01")
- [ ] **Group related files** together
- [ ] **Avoid deeply nested folders** (max 3-4 levels)
- [ ] **Include a README file** if needed for context

### 4. Quality Checks
- [ ] **Verify audio quality** before zipping
- [ ] **Check file formats** are supported
- [ ] **Test ZIP extraction** on another computer
- [ ] **Ensure files aren't corrupted**

---

## Troubleshooting Upload Issues

### ZIP File Problems

**Problem**: ZIP file uploads but fails to process

**Solution**:
- [ ] **Recreate the ZIP** using Deflate compression
- [ ] **Check file names** for special characters
- [ ] **Try a smaller ZIP file** first
- [ ] **Use 7-Zip** with correct settings

**Problem**: "Unsupported compression method" error

**Solution**:
- [ ] **Use Deflate compression** (not Deflate64)
- [ ] **Recreate the ZIP file** with correct settings
- [ ] **Check your compression tool** settings

### Browser-Related Issues

**Problem**: Upload fails or browser crashes with large files

**Solution**:
- [ ] **Switch to Firefox** for large uploads
- [ ] **Try smaller file sizes** first
- [ ] **Clear browser cache** and try again
- [ ] **Close other browser tabs** to free memory

**Problem**: Upload progress freezes

**Solution**:
- [ ] **Wait longer** - large files take time
- [ ] **Check internet connection** stability
- [ ] **Try refreshing** and starting over
- [ ] **Use Firefox** instead of Chrome/Edge

### File Format Issues

**Problem**: Audio files won't process

**Solution**:
- [ ] **Check audio format** (WAV, MP3, M4A supported)
- [ ] **Verify file isn't corrupted**
- [ ] **Try a different audio file**
- [ ] **Check file size** isn't too large

---

## Alternative Upload Methods

### For Very Large Files

If you're having trouble with browser uploads:

**FTP Integration:**
- Contact your Vela Account Manager
- Set up automated FTP uploads
- Bypass browser limitations entirely

**Batch Processing:**
- Split large datasets into smaller ZIP files
- Upload in multiple batches
- Process files incrementally

---

## What to Expect

### Upload Process
- **Progress tracking**: Real-time upload status
- **Automatic processing**: Files processed after upload
- **Error notifications**: Clear error messages if issues occur
- **Processing time**: Larger files take longer to process

### Success Indicators
- **Upload completes** without errors
- **Files appear** in your dashboard
- **Processing begins** automatically
- **No error messages** displayed

---

## Next Steps

| For File Upload | For Technical Support |
|----------------|----------------------|
| [Data Upload Guide](./data-upload.md) | [Contact Support](mailto:support@botlhale.ai) |

### See also
- [Quick Start Guide](./quick-start.md) - Get started with Vela
- [Data Upload Guide](./data-upload.md) - Upload your call recordings
- [Dashboard Setup](./dashboard.md) - Create your performance dashboard

