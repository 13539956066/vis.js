// NOTE: Not all config values may necessarily be changed at runtime. Some are
// mutated internally after intialization, meaning changing them at runtime may
// not work as expected.

/* *************************** */
/* * Basic spectrum settings * */
/* *************************** */
// BASIC ATTRIBUTES
var spectrumSize = 63; // number of bars in the spectrum
var spectrumDimensionScalar = 4.5; // the ratio of the spectrum width to its height
var spectrumSpacing = 7; // the separation of each spectrum bar in pixels at width=1920
var maxFftSize = 16384; // the preferred fftSize to use for the audio node (actual fftSize may be lower)
// BASIC TRANSFORMATION
var spectrumStart = 4; // the first bin rendered in the spectrum
var spectrumEnd = 400; // the last bin rendered in the spectrum
var spectrumScale = 1.8; // the logarithmic scale to adjust spectrum values to
// EXPONENTIAL TRANSFORMATION
var spectrumMaxExponent = 5; // the max exponent to raise spectrum values to
var spectrumMinExponent = 3; // the min exponent to raise spectrum values to
var spectrumExponentScale = 2; // the scale for spectrum exponents
// DROP SHADOW
var spectrumShadowBlur = 6; // the blur radius of the spectrum's drop shadow
var spectrumShadowOffsetX = -1; // the x-offset of the spectrum's drop shadow
var spectrumShadowOffsetY = -1; // the y-offset of the spectrum's drop shadow

/* ********************** */
/* * Smoothing settings * */
/* ********************** */
var smoothingPoints = 3; // points to use for algorithmic smoothing. Must be an odd number.
var smoothingExponent = 2; // lower values = more extreme smoothing. Values below 1 may eat your firstborn.
var smoothingPasses = 1; // number of smoothing passes to execute
var temporalSmoothing = 0.25; // passed directly to the JS analyzer node

/* ************************************ */
/* * Spectrum margin dropoff settings * */
/* ************************************ */
var headMargin = 7; // the size of the head margin dropoff zone
var tailMargin = 0; // the size of the tail margin dropoff zone
var minMarginWeight = 0.6; // the minimum weight applied to bars in the dropoff zone

/* *************************** */
/* * Basic particle settings * */
/* *************************** */
// COUNT
var baseParticleCount = 1000; // the number of particles at 1080p
var fleckCount = 0.05; // fleck count relative to base particle count
var bokehCount = 0.2; // bokeh count relative to base particle count
// OPACITY
var particleOpacity = 0.7; // opacity of primary particles
var bokehOpacity = 0.5; // opacity of bokeh (raising this above 0.5 results in weird behavior)
// SIZE
var minParticleSize = 4; // the minimum size scalar for particle systems
var maxParticleSize = 7; // the maximum size scalar for particle systems
var particleSizeExponent = 2; // the exponent to apply during dynamic particle scaling (similar to spectrum exponents)
// POSITIONING
var yVelRange = 3; // the range for particle y-velocities
var posBias = 4.5; // bias for particle positions (higher values = more center-biased)
// VELOCITY
var particleVelocity = 2.8; // the scalar for particle velocity
var velBias = 2.5; // bias for particle velocities (higher values = more center-biased)
var fleckVelocityScalar = 2; // velocity of flecks relative to normal particles
var fleckYVelScalar = 0.75; // y-velocity range of flecks relative to x-velocity
var minParticleVelocity = 0.005; // the lowest multiplier for particle speeds

/* ****************************** */
/* * Particle analysis settings * */
/* ****************************** */
var ampLower = 4; // the lower bound for amplitude analysis (inclusive)
var ampUpper = 30; // the upper bound for amplitude analysis (exclusive)
var particleExponent = 5; // the power to raise velMult to after initial computation

/* ***************** */
/* * Misc settings * */
/* ***************** */
var cycleSpeed = 4; // the (arbitrary) scalar for cycling rainbow spectrums
var blockWidthRatio = 0.63; // the width of the Monstercat logo relative to its containing block
var blockHeightRatio = 0.73; // the height of the Monstercat logo relative to its containing block
var mouseSleepTime = 2000; // inactivity period in milliseconds before the bottom text is hidden