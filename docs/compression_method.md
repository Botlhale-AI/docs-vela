---
sidebar_position: 11
---

# Vela Platform Compression Methods

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

Vela implements a comprehensive compression strategy to optimise performance, reduce bandwidth usage, and minimise storage costs. This multi-layered approach ensures your data is processed efficiently while maintaining quality for accurate call analysis.

---

## HTTP and Network Compression

### Built-in Performance Optimisation
Vela leverages advanced compression technologies to deliver content quickly and efficiently.

**Key Features:**
- **Automatic compression** of static assets and API responses
- **Gzip and Brotli support** for modern browsers
- **Dynamic content optimisation** for real-time data
- **Bandwidth reduction** of up to 70% for text-based content

**How it works:**
Vela automatically detects your browser's compression capabilities and delivers optimised content. No configuration required - it works seamlessly in the background.

### Brotli Compression
Vela includes Brotli compression support for modern browsers, providing superior compression ratios compared to traditional methods.

**Benefits:**
- **Better compression ratios** than Gzip (typically 15-25% smaller)
- **Faster decompression** for improved page load times
- **Modern browser support** for optimal performance
- **Reduced bandwidth usage** for cost savings

---

## Audio File Compression

### FFmpeg Integration
Vela uses FFmpeg for professional audio processing and compression through the `fluent-ffmpeg` package.

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

### Next.js Image Optimisation
Vela uses Next.js Image component for automatic image optimisation and compression.

**Key Features:**
- **Automatic format selection**: WebP for modern browsers, with JPEG/PNG fallbacks
- **Responsive sizing**: Automatic image resizing based on device requirements
- **Lazy loading**: Images load only when needed for faster page loads
- **Quality optimisation**: Automatic quality adjustment for optimal file sizes

**Configuration:**
```javascript
// next.config.js
images: {
  domains: [
    'botlhale-ai-assets.s3.us-east-1.amazonaws.com',
    'botlhale-ai-assets.s3.amazonaws.com',
    'botlhale-vela-org-logos.s3.eu-west-1.amazonaws.com',
  ],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*.amazonaws.com',
      pathname: '/**',
    },
  ],
},
```

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
- **7-Zip**: Ultra-high compression format for maximum efficiency
- **Other compressed formats**: Additional archive support for flexibility

### Batch Upload Optimisation
- **Chunked uploads**: Large files uploaded in manageable chunks
- **Parallel processing**: Multiple files processed simultaneously
- **Progress tracking**: Real-time upload progress monitoring
- **Error handling**: Robust error recovery and retry mechanisms

---

## Database and Storage Compression

### MongoDB Compression
Vela uses MongoDB with built-in compression features for efficient data storage.

**Compression Benefits:**
- **WiredTiger compression**: Default storage engine compression
- **Index compression**: Optimised index storage for faster queries
- **Data deduplication**: Reduced storage requirements
- **Query optimisation**: Faster data retrieval and analysis

### Cloud Storage Optimisation

#### AWS S3 Compression
```javascript
// S3 upload with automatic compression
const uploadCalls = async (filename) => {
  // Automatic S3 compression handling
  const formData = new FormData();
  formData.append("file", new Blob([fileData]), "[PROXY]");
  
  const uploadFileRes = await fetch(uploadRes.url, {
    method: "POST",
    body: formData,
  });
};
```

**S3 Compression Features:**
- **Automatic compression**: S3 handles compression automatically
- **Lifecycle policies**: Automatic file optimisation over time
- **Storage classes**: Cost-optimised storage tiers
- **CDN integration**: Global content delivery for fast access

---

## Performance Optimisation

### Webpack Optimisation
```javascript
// next.config.js
webpack(config, { isServer, webpack }) {
  if (isServer) {
    config.resolve.alias.canvas = false;
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.FLUENTFFMPEG_COV": false,
    })
  );

  return config;
},
```

### Code Splitting and Optimisation
- **Dynamic imports**: Lazy-loaded components for faster initial loads
- **Route-based splitting**: Page-level code splitting for efficiency
- **Vendor optimisation**: Third-party library optimisation
- **Tree shaking**: Unused code elimination for smaller bundles

### Caching Strategies
- **Browser caching**: Static asset caching for repeat visits
- **CDN caching**: Global content caching for worldwide access
- **API response caching**: Intelligent API caching for faster responses
- **Database query caching**: Optimised database queries for performance

---

## Configuration

### Environment Variables
```bash
# Compression-related environment variables
NODE_ENV=production  # Enables production optimisations
NEXT_PUBLIC_CLIENT_URL=https://your-domain.com
NEXT_PUBLIC_SOCKET_URL=wss://your-socket-server.com
NEXT_PUBLIC_SERVER_URL=https://your-api-server.com
```

### Next.js Configuration
```javascript
// next.config.js
const nextConfig = {
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
      "pdf-parse"
    ],
  },
};
```

---

## Best Practices

### 1. File Upload Optimisation
- [ ] **Validate file types**: Ensure supported formats before upload
- [ ] **Limit file sizes**: Implement appropriate size restrictions
- [ ] **Use chunked uploads**: For large files to improve reliability
- [ ] **Monitor progress**: Provide user feedback during uploads

### 2. Audio Processing
- [ ] **Standardise formats**: Convert to consistent format for processing
- [ ] **Optimise sample rates**: Use appropriate sample rates for your content
- [ ] **Preserve quality**: Maintain audio quality for accurate call analysis
- [ ] **Handle errors**: Implement robust error recovery mechanisms

### 3. Image Optimisation
- [ ] **Use Next.js Image**: Leverage automatic optimisation features
- [ ] **Choose appropriate formats**: WebP for photos, PNG for graphics
- [ ] **Implement lazy loading**: Improve page load times
- [ ] **Use responsive images**: Different sizes for different devices

### 4. PDF Generation
- [ ] **Enable compression**: Always use PDF compression for reports
- [ ] **Optimise content**: Remove unnecessary elements and metadata
- [ ] **Use appropriate fonts**: Subset fonts when possible
- [ ] **Monitor file sizes**: Keep reports manageable for users

### 5. Database Optimisation
- [ ] **Use indexes**: Optimise query performance with proper indexing
- [ ] **Implement pagination**: Limit result sets for better performance
- [ ] **Cache frequently accessed data**: Reduce database load
- [ ] **Monitor query performance**: Identify and resolve bottlenecks

---

## Monitoring and Analytics

### Compression Metrics
- **File size reduction**: Track compression ratios across different file types
- **Upload/download times**: Monitor performance improvements
- **Storage costs**: Track storage optimisation and cost savings
- **User experience**: Monitor page load times and responsiveness

### Performance Monitoring
- **Core Web Vitals**: Monitor LCP, FID, CLS for user experience
- **API response times**: Track backend performance and optimisation
- **Database query times**: Monitor database performance improvements
- **Error rates**: Track compression-related errors and issues

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Large File Uploads
**Problem**: Files fail to upload or timeout
**Solution**: 
- [ ] Check file size limits and restrictions
- [ ] Verify supported formats and compatibility
- [ ] Use chunked uploads for large files
- [ ] Ensure stable internet connection

#### 2. Audio Processing Errors
**Problem**: Audio conversion fails or produces errors
**Solution**:
- [ ] Verify FFmpeg installation and configuration
- [ ] Check audio file format and integrity
- [ ] Ensure sufficient disk space for processing
- [ ] Validate audio file quality and format

#### 3. PDF Generation Issues
**Problem**: PDF files are too large or fail to generate
**Solution**:
- [ ] Enable PDF compression in generation settings
- [ ] Optimise embedded images and graphics
- [ ] Use appropriate fonts and text formatting
- [ ] Monitor and limit content size

#### 4. Image Loading Problems
**Problem**: Images load slowly or fail to display
**Solution**:
- [ ] Use Next.js Image component for automatic optimisation
- [ ] Implement lazy loading for better performance
- [ ] Optimise image formats and sizes
- [ ] Check CDN configuration and caching

---

## Future Enhancements

### Planned Improvements
- **Advanced audio compression**: Implement more efficient audio formats
- **Video compression**: Add comprehensive video file support
- **Real-time compression**: Implement streaming compression for live data
- **Smart optimisation**: Use advanced techniques for better compression

### Technology Updates
- **WebP 2.0**: Next-generation image format with improved compression
- **AVIF**: Advanced video/image format for better efficiency
- **Opus audio**: High-quality audio compression for voice recordings
- **Zstandard**: Fast compression method for improved performance

---

## Next Steps

| **For Performance Monitoring** | **For Technical Support** |
|------------------------|------------------|
| [Monitor Performance](./dashboard.md) | [Contact Support](mailto:support@botlhale.ai) |

### See also
- [Quick Start Guide](./quick-start.md) - Get started with Vela
- [Data Upload Guide](./data-upload.md) - Upload your call recordings
- [Dashboard Setup](./dashboard.md) - Create your performance dashboard

---

## Conclusion

Vela's comprehensive compression strategy optimises performance across all aspects of the platform. From HTTP compression to specialised audio and PDF compression, the system ensures efficient data transfer, reduced storage costs, and improved user experience.

For questions or support regarding compression methods, please contact our support team or consult the relevant technical documentation.
