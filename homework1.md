# Flowchart Program Segitiga Bintang

## 1. For Loop

```mermaid
flowchart TD
    A((Mulai)) --> B[/n = 5/]
    B --> C[i = 1]

    C --> D{ i <= n? }

    D -- Tidak --> E[/Output pemisah/]
    E --> F((Selesai))

    D -- Ya --> G[kolom = ""]

    G --> H[s = 1]
    H --> I{ s <= n - i? }

    I -- Ya --> J[/Tambahkan spasi/]
    J --> K[s = s + 1]
    K --> I

    I -- Tidak --> L[j = 1]
    L --> M{ j <= 2i - 1? }

    M -- Ya --> N[/Tambahkan bintang/]
    N --> O[j = j + 1]
    O --> M

    M -- Tidak --> P[/Cetak kolom/]
    P --> Q[i = i + 1]
    Q --> D
