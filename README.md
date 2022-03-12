# Scoped tasks bug

This is the started turbo repo with two new files

Run:

```
node apps/build.js
```

and it fails


Now run

```
node apps/build_working.js
```

and now it works.

The difference?

```diff
- --scope="pkg"
+ --scope=pkg
```


Now, if you run:

```
cd <root>
./node_modules/.bin/turbo run build --scope="web"   
```

it will work?
