run: 
	npm run dev

build-linux:
	npm run build:linux

generate-protos gp:
	@npx pbjs \
		-w es6 \
	 	-t static-module \
		-o src/renderer/protos/v1/pb.js \
	  -p src/renderer/protos/v1/ \
			 auth.proto shared.proto
	@npx pbts \
  	-o src/renderer/protos/v1/pb.d.ts \
  	src/renderer/protos/v1/pb.js
	