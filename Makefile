run: 
	npm run dev

build-linux:
	npm run build:linux

compile-protos cp:
	npx pbjs \
		-w es6 \
		-t static-module \
		-o src/renderer/protos/v1/pb.js \
		-p src/renderer/protos/v1/ \
		src/renderer/protos/v1/messages.proto \
		src/renderer/protos/v1/channel.proto \
		src/renderer/protos/v1/appserver.proto
	@npx pbts \
  	-o src/renderer/protos/v1/pb.d.ts \
  	src/renderer/protos/v1/pb.js
	