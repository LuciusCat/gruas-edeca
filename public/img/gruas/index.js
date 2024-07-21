const imageModules = import.meta.glob('./*.webp');

const imagePromises = [];

for (const path in imageModules) {
    imagePromises.push(imageModules[path]().then((module) => ({
        original: module.default,
        thumbnail: module.default,
    })));
}

const images = await Promise.all(imagePromises);

export { images };


