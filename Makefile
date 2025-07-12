PROTO_FILES := $(shell find src/renderer/protos/v1 -name '*.proto')

run: 
	npm run dev

build-linux:
	npm run build:linux

compile-protos cp:
	npx pbjs \
		-w es6 \
		-t static-module \
		--keep-case \
		--force-long \
		-o src/renderer/protos/v1/pb.js \
		-p src/renderer/protos/v1/ \
		$(PROTO_FILES)
	@npx pbts \
		-o src/renderer/protos/v1/pb.d.ts \
		src/renderer/protos/v1/pb.js