const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const translations = {
    pt: {
        appName: "Minha Biblioteca",
        welcomeEyebrow: "SEU ESPAÇO DIGITAL",
        welcomeTitle: "Tudo o que você gosta, em um só lugar.",
        welcomeText: "Guarde sites, organize seus favoritos e encontre seus links com facilidade.",
        feature1: "Sua coleção de links organizada",
        feature2: "Seu perfil do seu jeito",
        feature3: "Interface em português ou inglês",

        loginEyebrow: "BEM-VINDO DE VOLTA",
        loginTitle: "Entrar na sua conta",
        loginSubtitle: "Continue de onde você parou.",
        emailOrUsername: "E-mail ou nome de usuário",
        password: "Senha",
        show: "Ver",
        hide: "Ocultar",
        forgotPassword: "Esqueci minha senha",
        loginButton: "Entrar",
        or: "ou",
        continueGoogle: "Continuar com Google",
        noAccount: "Ainda não tem uma conta?",
        createAccount: "Criar conta",

        registerEyebrow: "COMECE AGORA",
        registerTitle: "Crie sua conta",
        registerSubtitle: "É rapidinho. Vamos organizar seus links?",
        fullName: "Nome completo",
        username: "Nome de usuário",
        email: "E-mail",
        confirmPassword: "Confirmar senha",
        createMyAccount: "Criar minha conta",
        alreadyAccount: "Já tem uma conta?",

        verifyEyebrow: "SÓ MAIS UM PASSO",
        verifyTitle: "Confirme seu e-mail",
        demoNoticeTitle: "Prévia de demonstração",
        demoNoticeText: "Este projeto local ainda não envia e-mails de verdade. O botão abaixo apenas simula a confirmação para você testar a aplicação.",
        simulateVerification: "Simular confirmação de e-mail",
        backToLogin: "Voltar para o login",

        passwordHelp: "AJUDA COM A CONTA",
        forgotTitle: "Recuperar senha",
        forgotText: "Digite seu e-mail. Nesta versão de demonstração, não enviaremos uma mensagem real.",
        simulateRecovery: "Testar recuperação",

        editProfile: "Editar perfil",
        logout: "Sair da conta",

        yourSpace: "SEU ESPAÇO",
        libraryTitle: "Sua biblioteca",
        librarySubtitle: "Seus sites favoritos, organizados do seu jeito.",
        addSite: "Adicionar site",
        searchPlaceholder: "Buscar na biblioteca...",
        savedLinks: "links salvos",
        newLink: "Novo link",
        newLinkSubtitle: "Adicione um site à sua coleção.",
        siteName: "Nome do site",
        siteUrl: "Endereço do site",
        category: "Categoria",
        general: "Geral",
        study: "Estudo",
        entertainment: "Entretenimento",
        work: "Trabalho",
        tools: "Ferramentas",
        saveLink: "Salvar link",
        emptyTitle: "Sua biblioteca começa aqui",
        emptyText: "Adicione seu primeiro site para deixar tudo organizado em um só lugar.",
        addFirstSite: "Adicionar meu primeiro site",
        localWarning: "Versão local: os dados ficam neste navegador. Não use senhas reais.",

        backToLibrary: "Voltar à biblioteca",
        accountSettings: "SUA CONTA · CONFIGURAÇÕES",
        myProfile: "Meu perfil",
        profileSubtitle: "Gerencie suas informações pessoais.",
        avatarHint: "Seu avatar usa a inicial do seu nome.",
        personalInfo: "Informações pessoais",
        saveChanges: "Salvar alterações",
        cancel: "Cancelar",
        securityAccess: "Segurança e acesso",
        securitySubtitle: "Proteja sua conta e mantenha seu e-mail atualizado.",
        emailVerification: "Verificação de e-mail",
        pending: "Pendente",
        verified: "Confirmado (simulação)",
        changePassword: "Alterar senha →",
        newPassword: "Nova senha",
        passwordDemoNote: "Demonstração: a senha não é alterada nem salva de verdade.",
        footerText: "Organize. Descubra. Guarde.",

        errorFill: "Preencha todos os campos.",
        errorPasswordLength: "A senha precisa ter pelo menos 6 caracteres.",
        errorPasswordMismatch: "As senhas não são iguais.",
        errorEmail: "Digite um e-mail válido.",
        errorUsernameTaken: "Esse nome de usuário já está sendo usado.",
        errorEmailTaken: "Já existe uma conta com esse e-mail.",
        registered: "Conta criada nesta demonstração. Confirme seu e-mail para continuar.",
        verifyLogin: "Esta conta ainda não foi confirmada. Conclua a etapa de demonstração de verificação.",
        invalidLogin: "Não encontramos essa conta ou a senha está incorreta.",
        loginSuccess: "Login realizado!",
        googleDemo: "O login com Google ainda precisa ser conectado a um serviço de autenticação. Nenhuma conta foi acessada.",
        forgotDemo: "Nesta versão local, a recuperação real por e-mail ainda não está conectada.",
        verifiedMessage: "E-mail confirmado na demonstração! Agora você pode entrar.",
        profileSaved: "Perfil atualizado nesta demonstração.",
        profileInvalid: "Preencha seu nome e nome de usuário.",
        siteInvalid: "Informe um nome e um endereço válido (ex.: https://exemplo.com).",
        siteSaved: "Link adicionado!",
        noResults: "Nenhum link encontrado. Tente outra busca.",
        delete: "Excluir",
        open: "Abrir",
        edit: "Editar",
        profileCancelled: "Alterações descartadas.",
        logoutMessage: "Você saiu da conta.",
        emptySearch: "Nenhum link por aqui ainda.",
        passwordChangeDemo: "Esta versão é uma demonstração: a senha não foi alterada.",
        resetPasswordDemo: "A recuperação de senha real precisa ser conectada a um serviço de autenticação.",
        editSitePrompt: "Editar nome do site:",
        deleteConfirm: "Deseja excluir este link?",
        categoryGeneral: "Geral",
        categoryStudy: "Estudo",
        categoryEntertainment: "Entretenimento",
        categoryWork: "Trabalho",
        categoryTools: "Ferramentas"
    },

    en: {
        appName: "My Library",
        welcomeEyebrow: "YOUR DIGITAL SPACE",
        welcomeTitle: "Everything you love, in one place.",
        welcomeText: "Save websites, organize your favorites, and find your links easily.",
        feature1: "Your links, neatly organized",
        feature2: "A profile that feels like yours",
        feature3: "Interface in Portuguese or English",

        loginEyebrow: "WELCOME BACK",
        loginTitle: "Sign in to your account",
        loginSubtitle: "Pick up where you left off.",
        emailOrUsername: "Email or username",
        password: "Password",
        show: "Show",
        hide: "Hide",
        forgotPassword: "Forgot password?",
        loginButton: "Sign in",
        or: "or",
        continueGoogle: "Continue with Google",
        noAccount: "Don't have an account yet?",
        createAccount: "Create account",

        registerEyebrow: "GET STARTED",
        registerTitle: "Create your account",
        registerSubtitle: "It only takes a moment. Let's organize your links.",
        fullName: "Full name",
        username: "Username",
        email: "Email",
        confirmPassword: "Confirm password",
        createMyAccount: "Create my account",
        alreadyAccount: "Already have an account?",

        verifyEyebrow: "ONE MORE STEP",
        verifyTitle: "Verify your email",
        demoNoticeTitle: "Demo preview",
        demoNoticeText: "This local project does not send real emails yet. The button below only simulates verification so you can test the app.",
        simulateVerification: "Simulate email verification",
        backToLogin: "Back to sign in",

        passwordHelp: "ACCOUNT HELP",
        forgotTitle: "Reset password",
        forgotText: "Enter your email. This demo version will not send a real message.",
        simulateRecovery: "Test recovery",

        editProfile: "Edit profile",
        logout: "Sign out",

        yourSpace: "YOUR SPACE",
        libraryTitle: "Your library",
        librarySubtitle: "Your favorite websites, organized your way.",
        addSite: "Add website",
        searchPlaceholder: "Search your library...",
        savedLinks: "saved links",
        newLink: "New link",
        newLinkSubtitle: "Add a website to your collection.",
        siteName: "Website name",
        siteUrl: "Website address",
        category: "Category",
        general: "General",
        study: "Study",
        entertainment: "Entertainment",
        work: "Work",
        tools: "Tools",
        saveLink: "Save link",
        emptyTitle: "Your library starts here",
        emptyText: "Add your first website to keep everything organized in one place.",
        addFirstSite: "Add my first website",
        localWarning: "Local version: data stays in this browser. Do not use real passwords.",

        backToLibrary: "Back to library",
        accountSettings: "YOUR ACCOUNT · SETTINGS",
        myProfile: "My profile",
        profileSubtitle: "Manage your personal information.",
        avatarHint: "Your avatar uses the initial of your name.",
        personalInfo: "Personal information",
        saveChanges: "Save changes",
        cancel: "Cancel",
        securityAccess: "Security & access",
        securitySubtitle: "Keep your account secure and your email up to date.",
        emailVerification: "Email verification",
        pending: "Pending",
        verified: "Verified (simulation)",
        changePassword: "Change password →",
        newPassword: "New password",
        passwordDemoNote: "Demo: your password is not actually changed or saved.",
        footerText: "Organize. Discover. Save.",

        errorFill: "Please fill in every field.",
        errorPasswordLength: "Your password must be at least 6 characters.",
        errorPasswordMismatch: "The passwords do not match.",
        errorEmail: "Enter a valid email address.",
        errorUsernameTaken: "That username is already taken.",
        errorEmailTaken: "An account with that email already exists.",
        registered: "Account created in this demo. Verify your email to continue.",
        verifyLogin: "This account has not been verified yet. Complete the demo verification step.",
        invalidLogin: "We couldn't find that account or the password is incorrect.",
        loginSuccess: "Signed in!",
        googleDemo: "Google sign-in still needs to be connected to an authentication service. No account was accessed.",
        forgotDemo: "Real email recovery is not connected in this local version.",
        verifiedMessage: "Email verified in the demo! You can now sign in.",
        profileSaved: "Profile updated in this demo.",
        profileInvalid: "Enter your name and username.",
        siteInvalid: "Enter a name and a valid address (e.g. https://example.com).",
        siteSaved: "Link added!",
        noResults: "No links found. Try another search.",
        delete: "Delete",
        open: "Open",
        edit: "Edit",
        profileCancelled: "Changes discarded.",
        logoutMessage: "You have signed out.",
        emptySearch: "No links here yet.",
        passwordChangeDemo: "This is a demo: your password was not changed.",
        resetPasswordDemo: "Real password recovery needs an authentication service.",
        editSitePrompt: "Edit website name:",
        deleteConfirm: "Do you want to delete this link?",
        categoryGeneral: "General",
        categoryStudy: "Study",
        categoryEntertainment: "Entertainment",
        categoryWork: "Work",
        categoryTools: "Tools"
    }
};

const STORAGE_KEY = "minhaBibliotecaDemo_v1";

let language = localStorage.getItem("minhaBibliotecaLanguage") || "pt";
let currentUserEmail = localStorage.getItem("minhaBibliotecaCurrentUser") || "";
let pendingVerificationEmail = "";
let editingSiteId = null;

function getDatabase() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
            users: [],
            sitesByEmail: {}
        };
    } catch {
        return {
            users: [],
            sitesByEmail: {}
        };
    }
}

function saveDatabase(db) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function t(key) {
    return (translations[language] && translations[language][key])
        || translations.pt[key]
        || key;
}

function showMessage(node, message, error = false) {
    if (!node) return;

    node.textContent = message;
    node.classList.toggle("error", error);
}

function clearMessages() {
    ["authMessage", "forgotMessage", "siteMessage", "profileMessage"].forEach(id => {
        const node = document.getElementById(id);

        if (node) {
            showMessage(node, "");
        }
    });
}

function applyLanguage() {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

    $$("[data-i18n]").forEach(node => {
        const key = node.dataset.i18n;

        if (t(key)) {
            node.textContent = t(key);
        }
    });

    $$("[data-i18n-placeholder]").forEach(node => {
        node.placeholder = t(node.dataset.i18nPlaceholder);
    });

    const languageSelect = $("#languageSelect");

    if (languageSelect) {
        languageSelect.value = language;
    }

    renderSites();
    updateProfileHeader();
    updateProfileView();
}

function setLanguage(next) {
    language = next;

    localStorage.setItem("minhaBibliotecaLanguage", language);

    applyLanguage();
}

function showAuthPanel(panelName) {
    ["loginPanel", "registerPanel", "verificationPanel", "forgotPanel"].forEach(id => {
        const panel = $("#" + id);

        if (panel) {
            panel.classList.add("hidden");
        }
    });

    const selectedPanel = $("#" + panelName);

    if (selectedPanel) {
        selectedPanel.classList.remove("hidden");
    }

    showMessage($("#authMessage"), "");
    showMessage($("#forgotMessage"), "");
}

function showView(viewName) {
    $("#authView").classList.toggle("hidden", viewName !== "auth");
    $("#libraryView").classList.toggle("hidden", viewName !== "library");
    $("#profileView").classList.toggle("hidden", viewName !== "profile");

    $("#headerProfile").classList.toggle("hidden", viewName === "auth");
    $("#profileDropdown").classList.add("hidden");

    clearMessages();

    if (viewName === "library") {
        renderSites();
    }

    if (viewName === "profile") {
        updateProfileView();
    }
}

function getCurrentUser() {
    if (!currentUserEmail) {
        return null;
    }

    return getDatabase().users.find(user =>
        user.email.toLowerCase() === currentUserEmail.toLowerCase()
    ) || null;
}

function initials(name) {
    const trimmed = (name || "?").trim();

    return Array.from(trimmed)[0]?.toLocaleUpperCase() || "?";
}

/* Cria um código único para o usuário, se ele ainda não tiver um. */
function ensureShareCode(user) {
    if (!user) {
        return "";
    }

    const db = getDatabase();

    const storedUser = db.users.find(item =>
        item.email.toLowerCase() === user.email.toLowerCase()
    );

    if (!storedUser) {
        return "";
    }

    if (!storedUser.shareCode) {
        let code;

        do {
            code = "MB-" + Math.random()
                .toString(36)
                .substring(2, 8)
                .toUpperCase();
        } while (db.users.some(item => item.shareCode === code));

        storedUser.shareCode = code;
        saveDatabase(db);
    }

    return storedUser.shareCode;
}

function updateProfileHeader() {
    const user = getCurrentUser();

    if (!user) {
        return;
    }

    $("#headerProfile").classList.remove("hidden");
    $("#profileMenuButton").textContent = initials(user.name);
    $("#dropdownAvatar").textContent = initials(user.name);
    $("#dropdownName").textContent = user.name;
    $("#dropdownEmail").textContent = user.email;
}

function updateProfileView() {
    const user = getCurrentUser();

    if (!user) {
        return;
    }

    $("#profileAvatar").textContent = initials(user.name);
    $("#profileDisplayName").textContent = user.name;
    $("#profileHandle").textContent = "@" + user.username;

    $("#profileName").value = user.name;
    $("#profileUsername").value = user.username;
    $("#profileEmail").value = user.email;

    $("#verificationBadge").textContent = user.verified
        ? t("verified")
        : t("pending");

    $("#verificationBadge").classList.toggle("verified", !!user.verified);

    $("#profileVerificationText").textContent = user.verified
        ? t("verified")
        : t("pending");

    /* Mostra o código pessoal nas informações do perfil. */
    const shareCodeInput = $("#profileShareCode");

    if (shareCodeInput) {
        shareCodeInput.value = ensureShareCode(user);
    }
}

function normalizeUrl(raw) {
    let value = raw.trim();

    if (!/^https?:\/\//i.test(value)) {
        value = "https://" + value;
    }

    try {
        const parsed = new URL(value);

        if (!["http:", "https:"].includes(parsed.protocol)) {
            return null;
        }

        return parsed.href;
    } catch {
        return null;
    }
}

function categoryLabel(category) {
    const map = {
        Geral: "categoryGeneral",
        Estudo: "categoryStudy",
        Entretenimento: "categoryEntertainment",
        Trabalho: "categoryWork",
        Ferramentas: "categoryTools"
    };

    return t(map[category] || "categoryGeneral");
}

function renderSites() {
    const grid = $("#sitesGrid");

    if (!grid) {
        return;
    }

    const user = getCurrentUser();

    grid.innerHTML = "";

    if (!user) {
        $("#emptyState").classList.remove("hidden");
        $("#siteCount").textContent = "0";
        return;
    }

    const db = getDatabase();
    const sites = db.sitesByEmail[user.email.toLowerCase()] || [];

    const searchInput = $("#searchSites");
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

    const filtered = sites.filter(site =>
        `${site.name} ${site.url} ${site.category}`.toLowerCase().includes(query)
    );

    $("#siteCount").textContent = String(sites.length);

    $("#emptyState").classList.toggle("hidden", filtered.length > 0);

    if (!filtered.length) {
        $("#emptyState").querySelector("h3").textContent =
            query ? t("noResults") : t("emptyTitle");

        $("#emptyState").querySelector("p").textContent =
            query ? "" : t("emptyText");

        $("#emptyAddButton").classList.toggle("hidden", !!query);
    } else {
        $("#emptyState").querySelector("h3").textContent = t("emptyTitle");
        $("#emptyState").querySelector("p").textContent = t("emptyText");
        $("#emptyAddButton").classList.remove("hidden");
    }

    filtered.forEach(site => {
        const card = document.createElement("article");
        card.className = "site-card";

        const hostname = new URL(site.url).hostname.replace(/^www\./, "");

        const top = document.createElement("div");
        top.className = "site-card-top";

        const icon = document.createElement("div");
        icon.className = "site-favicon";
        icon.textContent = initials(site.name);

        const titleWrap = document.createElement("div");
        titleWrap.className = "site-title-wrap";

        const title = document.createElement("h3");
        title.textContent = site.name;

        const domain = document.createElement("div");
        domain.className = "site-domain";
        domain.textContent = hostname;

        titleWrap.append(title, domain);
        top.append(icon, titleWrap);

        const description = document.createElement("p");
        description.className = "site-description";
        description.textContent = site.url;

        const bottom = document.createElement("div");
        bottom.className = "site-card-bottom";

        const category = document.createElement("span");
        category.className = "category-tag";
        category.textContent = categoryLabel(site.category);

        const actions = document.createElement("div");
        actions.className = "site-actions";

        const open = document.createElement("button");
        open.type = "button";
        open.className = "site-action";
        open.textContent = t("open");

        open.addEventListener("click", () => {
            window.open(site.url, "_blank", "noopener,noreferrer");
        });

        const edit = document.createElement("button");
        edit.type = "button";
        edit.className = "site-action";
        edit.textContent = t("edit");

        edit.addEventListener("click", () => editSite(site.id));

        const del = document.createElement("button");
        del.type = "button";
        del.className = "site-action delete";
        del.textContent = t("delete");

        del.addEventListener("click", () => deleteSite(site.id));

        actions.append(open, edit, del);
        bottom.append(category, actions);
        card.append(top, description, bottom);

        grid.append(card);
    });
}

function showAddSite() {
    $("#addSitePanel").classList.remove("hidden");
    $("#siteName").focus();

    $("#addSitePanel").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

function hideAddSite() {
    $("#addSitePanel").classList.add("hidden");
    $("#siteForm").reset();

    editingSiteId = null;

    $("#siteForm button[type=submit]").textContent = t("saveLink");

    showMessage($("#siteMessage"), "");
}

function editSite(id) {
    const user = getCurrentUser();

    if (!user) {
        return;
    }

    const db = getDatabase();
    const sites = db.sitesByEmail[user.email.toLowerCase()] || [];
    const site = sites.find(item => item.id === id);

    if (!site) {
        return;
    }

    editingSiteId = id;

    $("#siteName").value = site.name;
    $("#siteUrl").value = site.url;
    $("#siteCategory").value = site.category;

    $("#siteForm button[type=submit]").textContent = t("edit");

    showAddSite();
}

function deleteSite(id) {
    if (!confirm(t("deleteConfirm"))) {
        return;
    }

    const user = getCurrentUser();

    if (!user) {
        return;
    }

    const db = getDatabase();
    const key = user.email.toLowerCase();

    db.sitesByEmail[key] = (db.sitesByEmail[key] || []).filter(
        site => site.id !== id
    );

    saveDatabase(db);
    renderSites();
}

function loginUser(user) {
    currentUserEmail = user.email;

    localStorage.setItem("minhaBibliotecaCurrentUser", currentUserEmail);

    updateProfileHeader();
    showView("library");
}

function logout() {
    currentUserEmail = "";

    localStorage.removeItem("minhaBibliotecaCurrentUser");

    showView("auth");
    showAuthPanel("loginPanel");

    $("#loginPassword").value = "";

    showMessage($("#authMessage"), t("logoutMessage"));
}

/* Troca de idioma. */
$("#languageSelect").addEventListener("change", event => {
    setLanguage(event.target.value);
});

/* Navegação entre telas. */
$("#showRegisterButton").addEventListener("click", () => {
    showAuthPanel("registerPanel");
});

$("#showLoginButton").addEventListener("click", () => {
    showAuthPanel("loginPanel");
});

$("#backToLoginFromVerify").addEventListener("click", () => {
    showAuthPanel("loginPanel");
});

$("#backFromForgot").addEventListener("click", () => {
    showAuthPanel("loginPanel");
});

$("#forgotPasswordButton").addEventListener("click", () => {
    showAuthPanel("forgotPanel");
});

$("#googleLoginButton").addEventListener("click", () => {
    showMessage($("#authMessage"), t("googleDemo"), true);
});

/* Mostrar e ocultar senhas. */
$$("[data-toggle-password]").forEach(button => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.togglePassword);

        input.type = input.type === "password" ? "text" : "password";

        button.textContent = input.type === "password"
            ? t("show")
            : t("hide");
    });
});

/* Cadastro de usuário. */
$("#registerForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = $("#registerName").value.trim();
    const username = $("#registerUsername").value.trim().replace(/^@/, "");
    const email = $("#registerEmail").value.trim().toLowerCase();
    const password = $("#registerPassword").value;
    const confirmation = $("#confirmPassword").value;
    const message = $("#authMessage");

    if (!name || !username || !email || !password || !confirmation) {
        return showMessage(message, t("errorFill"), true);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return showMessage(message, t("errorEmail"), true);
    }

    if (password.length < 6) {
        return showMessage(message, t("errorPasswordLength"), true);
    }

    if (password !== confirmation) {
        return showMessage(message, t("errorPasswordMismatch"), true);
    }

    const db = getDatabase();

    if (db.users.some(user =>
        user.username.toLowerCase() === username.toLowerCase()
    )) {
        return showMessage(message, t("errorUsernameTaken"), true);
    }

    if (db.users.some(user =>
        user.email.toLowerCase() === email
    )) {
        return showMessage(message, t("errorEmailTaken"), true);
    }

    /*
     * Demonstração local apenas.
     * Não use senhas reais nem publique esta autenticação.
     */
    let shareCode;

    do {
        shareCode = "MB-" + Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();
    } while (db.users.some(user => user.shareCode === shareCode));

    db.users.push({
        name,
        username,
        email,
        password,
        shareCode,
        verified: false,
        createdAt: Date.now()
    });

    db.sitesByEmail[email] = [];

    saveDatabase(db);

    pendingVerificationEmail = email;

    $("#verificationEmail").textContent = email;
    $("#verificationDescription").textContent = t("registered");

    $("#registerForm").reset();

    showAuthPanel("verificationPanel");
});

/* Simulação de confirmação de e-mail. */
$("#simulateVerificationButton").addEventListener("click", () => {
    const db = getDatabase();

    const user = db.users.find(item =>
        item.email.toLowerCase() === pendingVerificationEmail.toLowerCase()
    );

    if (!user) {
        showAuthPanel("loginPanel");
        return;
    }

    user.verified = true;

    saveDatabase(db);

    $("#loginIdentifier").value = user.email;

    showAuthPanel("loginPanel");

    showMessage($("#authMessage"), t("verifiedMessage"));
});

/* Login normal. */
$("#loginForm").addEventListener("submit", event => {
    event.preventDefault();

    const identifier = $("#loginIdentifier").value.trim().toLowerCase();
    const password = $("#loginPassword").value;

    const db = getDatabase();

    const user = db.users.find(item =>
        item.email.toLowerCase() === identifier ||
        item.username.toLowerCase() === identifier
    );

    if (!user || user.password !== password) {
        return showMessage($("#authMessage"), t("invalidLogin"), true);
    }

    if (!user.verified) {
        pendingVerificationEmail = user.email;

        $("#verificationEmail").textContent = user.email;

        showAuthPanel("verificationPanel");

        showMessage($("#authMessage"), t("verifyLogin"), true);

        return;
    }

    showMessage($("#authMessage"), "");

    loginUser(user);
});

/* Recuperação de senha demonstrativa. */
$("#forgotForm").addEventListener("submit", event => {
    event.preventDefault();

    const email = $("#forgotEmail").value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return showMessage($("#forgotMessage"), t("errorEmail"), true);
    }

    showMessage($("#forgotMessage"), t("resetPasswordDemo"));
});

/* Menu e perfil. */
$("#profileMenuButton").addEventListener("click", () => {
    $("#profileDropdown").classList.toggle("hidden");
});

$("#openProfileButton").addEventListener("click", () => {
    showView("profile");
});

$("#logoutButton").addEventListener("click", logout);
$("#profileLogoutButton").addEventListener("click", logout);

$("#backToLibrary").addEventListener("click", () => {
    showView("library");
});

$("#profileName").addEventListener("input", () => {
    $("#profileAvatar").textContent = initials($("#profileName").value);
});

$("#profileUsername").addEventListener("input", () => {
    $("#profileHandle").textContent =
        "@" + $("#profileUsername").value.trim().replace(/^@/, "");
});

/* Salvar alterações do perfil. */
$("#profileForm").addEventListener("submit", event => {
    event.preventDefault();

    const user = getCurrentUser();

    if (!user) {
        return;
    }

    const name = $("#profileName").value.trim();
    const username = $("#profileUsername").value.trim().replace(/^@/, "");

    if (!name || !username) {
        return showMessage($("#profileMessage"), t("profileInvalid"), true);
    }

    const db = getDatabase();

    if (db.users.some(item =>
        item.email.toLowerCase() !== user.email.toLowerCase() &&
        item.username.toLowerCase() === username.toLowerCase()
    )) {
        return showMessage($("#profileMessage"), t("errorUsernameTaken"), true);
    }

    const stored = db.users.find(item =>
        item.email.toLowerCase() === user.email.toLowerCase()
    );

    if (!stored) {
        return;
    }

    stored.name = name;
    stored.username = username;

    saveDatabase(db);

    updateProfileHeader();
    updateProfileView();

    showMessage($("#profileMessage"), t("profileSaved"));
});

$("#cancelProfile").addEventListener("click", () => {
    updateProfileView();

    showMessage($("#profileMessage"), t("profileCancelled"));
});

/* Área de segurança. */
$("#changePasswordButton").addEventListener("click", () => {
    $("#changePasswordForm").classList.toggle("hidden");
});

$("#changePasswordForm").addEventListener("submit", event => {
    event.preventDefault();
});

$("#newPassword").addEventListener("change", () => {
    showMessage($("#profileMessage"), t("passwordChangeDemo"), true);
});

/* Adicionar e pesquisar sites. */
$("#addSiteShortcut").addEventListener("click", showAddSite);
$("#emptyAddButton").addEventListener("click", showAddSite);
$("#closeAddSite").addEventListener("click", hideAddSite);

$("#searchSites").addEventListener("input", renderSites);

$("#siteForm").addEventListener("submit", event => {
    event.preventDefault();

    const user = getCurrentUser();

    if (!user) {
        return;
    }

    const name = $("#siteName").value.trim();
    const url = normalizeUrl($("#siteUrl").value);
    const category = $("#siteCategory").value;

    if (!name || !url) {
        return showMessage($("#siteMessage"), t("siteInvalid"), true);
    }

    const db = getDatabase();
    const key = user.email.toLowerCase();
    const sites = db.sitesByEmail[key] || [];

    if (editingSiteId) {
        const site = sites.find(item => item.id === editingSiteId);

        if (site) {
            site.name = name;
            site.url = url;
            site.category = category;
        }
    } else {
        sites.unshift({
            id: (window.crypto && crypto.randomUUID)
                ? crypto.randomUUID()
                : String(Date.now()) + Math.random().toString(16).slice(2),
            name,
            url,
            category,
            createdAt: Date.now()
        });
    }

    db.sitesByEmail[key] = sites;

    saveDatabase(db);

    hideAddSite();
    renderSites();

    showMessage($("#siteMessage"), t("siteSaved"));
});

/* Fechar menu ao clicar fora dele. */
document.addEventListener("click", event => {
    if (!event.target.closest("#headerProfile")) {
        $("#profileDropdown").classList.add("hidden");
    }
});

/* Copiar o código pessoal do perfil. */
const copyShareCodeButton = $("#copyShareCodeButton");

if (copyShareCodeButton) {
    copyShareCodeButton.addEventListener("click", async () => {
        const input = $("#profileShareCode");

        if (!input || !input.value) {
            alert("Abra seu perfil para gerar seu código de compartilhamento.");
            return;
        }

        try {
            await navigator.clipboard.writeText(input.value);

            copyShareCodeButton.textContent = "Copiado!";

            setTimeout(() => {
                copyShareCodeButton.textContent = "Copiar";
            }, 1800);
        } catch {
            input.focus();
            input.select();

            alert("Selecione o código e pressione Ctrl + C para copiá-lo.");
        }
    });
}

/* Entrar usando o código de compartilhamento. */
const shareCodeButton = $("#shareCodeButton");

if (shareCodeButton) {
    shareCodeButton.addEventListener("click", () => {
        const input = $("#shareCode");
        const message = $("#shareCodeMessage");

        if (!input || !message) {
            return;
        }

        const code = input.value.trim().toUpperCase();

        if (!code) {
            message.classList.add("error");
            message.textContent = "Digite o código de compartilhamento.";
            return;
        }

        const db = getDatabase();

        const user = db.users.find(item =>
            item.shareCode &&
            item.shareCode.toUpperCase() === code
        );

        if (!user) {
            message.classList.add("error");
            message.textContent = "Código não encontrado neste navegador.";
            return;
        }

        if (!user.verified) {
            message.classList.add("error");
            message.textContent =
                "Esta conta ainda não foi confirmada na demonstração.";
            return;
        }

        message.classList.remove("error");
        message.textContent = "";

        loginUser(user);
    });
}

/* Inicialização do site. */
applyLanguage();

if (getCurrentUser()) {
    showView("library");
} else {
    showView("auth");
    showAuthPanel("loginPanel");
}