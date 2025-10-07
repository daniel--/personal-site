set -e
SKIP_PREFLIGHT_CHECK=true npm run build
aws s3 cp --recursive build s3://dlister.ca/
aws cloudfront create-invalidation --distribution-id E75AXUSJ23LO6 --paths '/*'
