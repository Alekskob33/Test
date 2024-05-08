# MaxPirogov

## Fix

1. Add this styles for runningTape (main page)
   - it avoids js issue, when styles needs

```html
<head>
  <style>
    .positioned-tape,
    .super-group,
    .group {
      display: flex;
      white-space: nowrap;
    }
    .header-tape {
      font-size: var(--size-desktop, 150px);
    }
    @media screen and (max-width: 1024px) {
      .header-tape {
        font-size: var(--size-mobile, 50px);
      }
    }
  </style>
</head>
```

1. And now the .s2 section (runningTape) must have these inline styles:

```html
<section
  style="--size-desktop: 150px; --size-mobile: 50px"
  class="s2"
></section>
```

## Todo

1. Нужно добавить фичу, чтобы скрыть скролл на время прелоадера
2. Отделить custom(by Maks) стили от основных
3. Посмотреть, почему столько дублей в стилях (на оригинале)
