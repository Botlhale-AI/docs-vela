---
sidebar_position: 11
---

# Vela Compression Methods

Learn how Vela optimises performance and reduces bandwidth usage through smart compression techniques. This guide explains the compression methods used throughout the platform to ensure fast, efficient data processing.

## What You'll Learn

By understanding Vela's compression methods, you can:
- [ ] **Optimise your file uploads** for faster processing
- [ ] **Reduce bandwidth usage** and improve performance
- [ ] **Understand storage efficiency** and cost optimisation
- [ ] **Troubleshoot compression-related issues**
- [ ] **Maximise platform performance** for your organisation

---

## Overview

Vela uses compression to make everything faster and use less space. This helps your data process quickly while keeping quality for accurate call analysis.

---

## HTTP and Network Compression

### Built-in Performance Optimisation
Vela uses advanced compression technologies to deliver content quickly and efficiently.

**Key Features:**
- **Automatic compression** of static assets and API responses
- **Gzip and Brotli support** for modern browsers
- **Dynamic content optimisation** for real-time data
- **Bandwidth reduction** of up to 70% for text-based content

**How it works:**
Vela automatically detects your browser's compression capabilities and delivers optimised content. No configuration required - it works seamlessly in the background.

### Brotli Compression
Vela includes Brotli compression support for modern browsers, providing better compression ratios compared to traditional methods.

**Benefits:**
- **Better compression ratios** than Gzip (typically 15-25% smaller)
- **Faster decompression** for improved page load times
- **Modern browser support** for optimal performance
- **Reduced bandwidth usage** for cost savings

---

## Audio File Compression

### FFmpeg Integration
Vela uses FFmpeg for audio processing and compression through the `fluent-ffmpeg` package.

**Supported Audio Formats:**
- **Input formats**: WAV, MP3, M4A, FLAC
- **Processing format**: WAV (16kHz standardised)
- **Quality optimisation**: Automatic bitrate adjustment

### Audio Processing Pipeline

#### 1. Format Standardisation
Vela converts all audio files to a standardised format for consistent processing:

```javascript
// MP3 to WAV conversion for processing
function convertMp3ToWav(mp3Filename) {
  return new Promise((resolve, reject) => {
    if (!isWavFile(mp3Filename)) {
      throw new Error(`Not an mp3 file`);
    }
    const outputFile = mp3Filename.replace(".mp3", ".wav");
    ffmpeg({
      source: mp3Filename,
    })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        resolve(outputFile);
      })
      .save(outputFile);
  });
}
```

#### 2. Sample Rate Optimisation
All audio is standardised to 16kHz for optimal processing:

```javascript
// Standardised 16kHz sample rate for processing
data.append("sample_rate", "16000");
```

### Audio Compression Benefits
- **Consistent processing**: Standardised format ensures reliable call analysis
- **Storage optimisation**: Efficient audio storage without quality loss
- **Quality preservation**: Maintains audio quality for accurate transcription
- **Bandwidth reduction**: Optimised for faster uploads and downloads

---

## PDF Compression

### Report Generation Optimisation
PDF reports are automatically compressed during generation to ensure fast downloads and efficient storage.

**Implementation:**
```javascript
const { toPDF, targetRef } = usePDF({
  filename: `${agent.name.split(" ").join("_")}_performance.pdf`,
  method: "build",
  page: {
    margin: Margin.SMALL,
  },
  overrides: {
    pdf: {
      compress: true,  // PDF compression enabled
    },
    canvas: {
      backgroundColor: theme !== "dark" ? "#ffffff" : "#031019",
    },
  },
});
```

### PDF Compression Features
- **Text compression**: Optimised text rendering for smaller file sizes
- **Image compression**: Compressed embedded images and graphics
- **Font optimisation**: Subset fonts to reduce file size
- **Metadata compression**: Reduced PDF metadata for efficiency

---

## Image Compression

### Image Optimisation
Vela uses optimised image handling for automatic compression and performance.

**Key Features:**
- **Automatic format selection**: WebP for modern browsers, with JPEG/PNG fallbacks
- **Responsive sizing**: Automatic image resizing based on device requirements
- **Lazy loading**: Images load only when needed for faster page loads
- **Quality optimisation**: Automatic quality adjustment for optimal file sizes


### Supported Image Formats
- **WebP**: Modern format with excellent compression ratios
- **JPEG**: Standard format with quality optimisation
- **PNG**: Lossless format for graphics and logos
- **SVG**: Vector format for scalable graphics

---

## File Upload Compression

### Archive File Support
Vela supports various compressed archive formats for efficient batch uploads.

**Supported Archive Formats:**
```javascript
accept = "application/zip, application/vnd.rar, application/x-7z-compressed, application/x-zip-compressed, application/x-compressed, multipart/x-zip"
```

**Archive Types:**
- **ZIP**: Standard compression format for most files
- **RAR**: High compression ratio format for large files
- **7-Zip**: High compression format for maximum efficiency
- **Other compressed formats**: Additional archive support for flexibility

### Batch Upload Optimisation
- **Chunked uploads**: Large files uploaded in manageable chunks
- **Parallel processing**: Multiple files processed simultaneously
- **Progress tracking**: Real-time upload progress monitoring
- **Error handling**: Robust error recovery and retry mechanisms


---

## Best Practices

Here are some handy tips to get the most out of Vela's compression features:

### 1. File Upload Optimisation
- [ ] **Check your file types**: Make sure you're uploading supported formats
- [ ] **Keep file sizes reasonable**: Large files take longer to process
- [ ] **Use chunked uploads**: For really big files, this helps avoid timeouts
- [ ] **Watch the progress**: You'll see real-time updates on your uploads

### 2. Audio Processing
- [ ] **Stick to standard formats**: WAV, MP3, work best
- [ ] **Use good quality audio**: Better input means better analysis
- [ ] **Let Vela handle the conversion**: We'll optimise everything automatically
- [ ] **Be patient with large files**: Processing takes time, but it's worth it

### 3. Image Optimisation
- [ ] **Choose the right format**: WebP for photos, PNG for graphics
- [ ] **Let Vela optimise automatically**: We'll handle the technical bits
- [ ] **Use appropriate sizes**: Don't upload massive images
- [ ] **Trust the lazy loading**: Images load when needed, not all at once

### 4. PDF Generation

- [ ] **Keep content clean**: Remove unnecessary elements before generating
- [ ] **Use standard fonts**: This helps keep file sizes down
- [ ] **Check file sizes**: Make sure reports aren't too big to download

---

## What to Expect

### Performance Benefits
- **Faster uploads**: Your files will upload more quickly
- **Smaller downloads**: Reports and exports will be much smaller
- **Better quality**: Compression doesn't mean lower quality
- **Smoother experience**: Everything loads faster and works better

### Monitoring Your Data
- **Upload progress**: You'll see real-time updates on file processing
- **File sizes**: Check how much space you're saving
- **Processing times**: See how quickly your data gets analysed
- **Quality reports**: Get detailed insights without massive file sizes

---

## Troubleshooting

Having issues? Here are some common problems and how to fix them:

### Upload Problems
**Problem**: Files won't upload or keep timing out

**Solution**: 
- [ ] Check your file size - really big files take longer
- [ ] Make sure you're using supported formats (WAV, MP3, M4A)
- [ ] Try uploading smaller batches if you have lots of files
- [ ] Check your internet connection is stable

### Audio Processing Issues
**Problem**: Audio conversion fails or produces errors

**Solution**:
- [ ] Make sure your audio files aren't corrupted
- [ ] Check the file format is supported
- [ ] Try a different audio file to test
- [ ] Give it more time - large files take longer to process

### PDF Generation Problems
**Problem**: PDF files are too large or fail to generate

**Solution**:

- [ ] Try generating a smaller report first
- [ ] Check if you have too many images in the report
- [ ] Contact support if the problem persists

### Slow Loading
**Problem**: Images load slowly or fail to display

**Solution**:
- [ ] Check your internet connection
- [ ] Try refreshing the page
- [ ] Clear your browser cache
- [ ] Let us know if it keeps happening

---

## Future Improvements

We're constantly working to improve Vela's compression capabilities and overall performance. Stay tuned for updates that will make your experience even better.

---

## Next Steps

| For Performance Monitoring | For Technical Support |
|------------------------|------------------|
| [Monitor Performance](./dashboard.md) | [Contact Support](mailto:support@botlhale.ai) |

### See also
- [Quick Start Guide](./quick-start.md) - Get started with Vela
- [Data Upload Guide](./data-upload.md) - Upload your call recordings
- [Dashboard Setup](./dashboard.md) - Create your performance dashboard

---

## Conclusion

Vela's compression makes everything work faster and smoother. Whether you're uploading audio files, generating reports, or just browsing the platform, compression helps everything load quicker and use less bandwidth.

**Need help?** If you're having trouble with any compression features, just drop us a line at support@botlhale.ai - we're here to help!
