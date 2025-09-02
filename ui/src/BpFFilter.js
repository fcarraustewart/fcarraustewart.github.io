// src/BpfFilter.js
export class BandPassFilter {
    constructor(lowCut, highCut, sampleRate) {
      this.lowCut = lowCut;
      this.highCut = highCut;
      this.sampleRate = sampleRate;
  
      // biquad coefficients
      this.b0 = this.b1 = this.b2 = this.a1 = this.a2 = 0;
      this.z1 = this.z2 = 0;
  
      this.updateCoeffs();
    }
  
    updateCoeffs() {
      const nyquist = this.sampleRate / 2;
      let f0 = Math.sqrt(this.lowCut * this.highCut); // center freq
      let bw = (this.highCut - this.lowCut) / f0;     // bandwidth (fractional)
  
      if (f0 <= 0) f0 = 0.1;
      if (bw <= 0) bw = 0.1;
  
      const w0 = 2 * Math.PI * f0 / this.sampleRate;
      const alpha = Math.sin(w0) * Math.sinh(Math.log(2) / 2 * bw * w0 / Math.sin(w0));
  
      const cosw0 = Math.cos(w0);
  
      this.b0 = alpha;
      this.b1 = 0;
      this.b2 = -alpha;
      this.a0 = 1 + alpha;
      this.a1 = -2 * cosw0;
      this.a2 = 1 - alpha;
  
      // normalize
      this.b0 /= this.a0;
      this.b1 /= this.a0;
      this.b2 /= this.a0;
      this.a1 /= this.a0;
      this.a2 /= this.a0;
    }
  
    process(x) {
      const y = this.b0 * x + this.b1 * this.z1 + this.b2 * this.z2
              - this.a1 * this.z1 - this.a2 * this.z2;
      this.z2 = this.z1;
      this.z1 = y;
      return y;
    }
  }
  