FROM node:14.5.0-alpine

# https://docs.docker.com/engine/reference/builder/#workdir
# DON'T THINK WE NEED TO DO THIS: RUN mkdir -p /app
WORKDIR /app

# https://docs.docker.com/engine/reference/builder/#env
# This form, ENV <key> <value>, will set a single variable to a value.
# The entire string after the first space will be treated as the <value> -
# including whitespace characters. The value will be interpreted for other
# environment variables, so quote characters will be removed if they are
# not escaped.
#ENV NODE_ENV production
#ENV PORT 5000

# https://docs.docker.com/engine/reference/builder/#expose
# The EXPOSE instruction does not actually publish the port.
# It functions as a type of documentation between the person
# who builds the image and the person who runs the container,
# about which ports are intended to be published. To actually
# publish the port when running the container, use the -p flag
# on docker run to publish and map one or more ports
EXPOSE 5000

# https://docs.docker.com/engine/reference/builder/#copy
# COPY [--chown=<user>:<group>] <src>... <dest>
# If <src> is a directory, the entire contents of the directory are copied
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/
COPY server /app/server/
COPY js /app/js/

# Install the node packages
RUN npm ci --only=production

ENTRYPOINT ["npm","run","start"]